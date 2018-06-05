from core.models import Seguindo, Tweet, User


def follow(user, username):
    userpara = User.objects.get(username=username)
    if Seguindo.objects.filter(de=user, para=userpara).count() == 0:
        Seguindo.objects.create(de=user, para=userpara)


def unfollow(user, username):
    userpara = User.objects.get(username=username)
    Seguindo.objects.filter(de=user, para=userpara).delete()


def tweet(user, text):
    Tweet.objects.create(user=user, text=text)


def list_tweets(user):
    # TODO: fica pra proxima.
    return [
        {
            'id': 1,
            'author_name': 'Isaac Newton',
            'author_username': '@isaacnewton',
            'author_avatar': 'http://1.bp.blogspot.com/-A9_ROvP0efw/TZI9dUsXAKI/AAAAAAAAGCI/rD_-a3ZBF3U/s1600/Isaac_Newton_Biography%255B1%255D.jpg',
            'created_at': '43 min',
            'text': 'A tendência dos corpos, quando nenhuma força é exercida sobre eles, é permanecer em seu estado natural, ou seja, repouso ou movimento retilíneo e uniforme.'
        }
    ]
