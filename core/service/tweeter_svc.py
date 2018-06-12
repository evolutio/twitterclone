from core.models import Seguindo, Tweet, User
from django.db.models import Q

def follow(user, username):
    userpara = User.objects.get(username=username)
    if Seguindo.objects.filter(de=user, para=userpara).count() == 0:
        Seguindo.objects.create(de=user, para=userpara)


def unfollow(user, username):
    userpara = User.objects.get(username=username)
    Seguindo.objects.filter(de=user, para=userpara).delete()


def tweet(user, text):
    tweet = Tweet.objects.create(user=user, text=text)
    return tweet.to_dict_json()


def list_tweets(loggeduser, username):
    if username:
        tweets = Tweet.objects.filter(user__username=username)
    else:
        if loggeduser:
            tweets = Tweet.objects.filter(
                Q(user__in=User.objects.filter(seguindo_para__de=loggeduser)) |
                Q(user=loggeduser)
            )
        else:
            tweets = Tweet.objects.all()
    tweets = tweets.order_by('-created_at')
    return [t.to_dict_json() for t in tweets]
