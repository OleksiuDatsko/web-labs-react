from settings import REDIS as redis


class HttpError(Exception):
    def __init__(self, status: int, *args) -> None:
        self.status = status
        super().__init__(*args)


class Hotel:
    """
    hotel:{id}:{name}
    """
    
    id: str
    name: str
    text: str
    total_visitors: int
    price: float

    hotel_atributes = ("id", "name", "text", "total_rooms", "price")

    prefix: str = "hotel"

    @classmethod
    def __get_hotel_key(cls, id: str, name: str = None):
        print(name, flush=True)
        if name:
            return f"{cls.prefix}:{id}:{name}"
        hotel: list[str] = redis.keys(f"{cls.prefix}:{id}:*")
        if not hotel:
            return None
        return f"{cls.prefix}:{id}:{hotel[0].split(':')[-1]}"

    @classmethod
    def __is_in_db(cls, id: str):
        return cls.__get_hotel_key(id) and cls.__get_hotel_key(id) in redis.keys(f"{cls.prefix}:*")

    @classmethod
    def __is_valid_hotel(cls, hotel, exeption: str = None):
        for atribute in cls.hotel_atributes:
            if atribute not in hotel and atribute != exeption:
                return False
        return True

    @classmethod
    def get(cls, id: str, name: str = None):
        if not cls.__is_in_db(id):
            raise HttpError(404)
        print(cls.__get_hotel_key(id, name), flush=True)
        return redis.hgetall(cls.__get_hotel_key(id, name))

    @classmethod
    def get_all(cls, name: str = None):
        if name:
            ids = [key.split(":")[1] for key in redis.keys(f"{cls.prefix}:*:*{name}*")]
        else:
            ids = [key.split(":")[1] for key in redis.keys(f"{cls.prefix}:*")]
        print(ids, flush=True)
        all_hotels = []
        for id in ids:
            all_hotels.append(cls.get(id))
        return all_hotels

    @classmethod
    def create(cls, hotel):
        if not cls.__is_valid_hotel(hotel) or cls.__is_in_db(hotel["id"]):
            raise HttpError(400, "non valid hotel")
        redis.hset(cls.__get_hotel_key(hotel["id"], hotel["name"]), mapping=hotel)
        if not cls.__is_in_db(hotel["id"]):
            raise HttpError(500, "hotel dont created in db")
        return hotel

    @classmethod
    def update(cls, hotel_id: str, hotel: dict):
        if not cls.__is_in_db(hotel_id):
            raise HttpError(404)
        if not cls.__is_valid_hotel(hotel, exeption="id"):
            raise HttpError(400)
        if "id" not in hotel:
            hotel["id"] = hotel_id
        redis.hset(cls.__get_hotel_key(hotel_id), mapping=hotel)
        print(hotel, flush=True)
        return hotel

    @classmethod
    def delete(cls, id: str):
        if not cls.__is_in_db(id):
            raise HttpError(400)
        redis.delete(cls.__get_hotel_key(id))
        return cls.get_all()
