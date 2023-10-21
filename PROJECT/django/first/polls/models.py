from django.db import models
from django.utils import timezone
import datetime
class Question(models.Model):
    question_text=models.CharField(max_length=200)
    pub_date=models.DateTimeField('date published')

    def __str__(self):
        return self.question_text
    # def was_published_recently(self):
    #     return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
    
    def was_published_recently(self):
     now = timezone.now()
     return now - datetime.timedelta(days=1) <= self.pub_date <= now


class Choice(models.Model):
    question = models.ForeignKey(Question,on_delete=models.CASCADE)
    choice_text=models.CharField(max_length=200)
    votes=models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
    
class Poll(models.Model):
    question_text = models.CharField(max_length=200)
    option1 = models.CharField(max_length=100)
    option2 = models.CharField(max_length=100)
    option3 = models.CharField(max_length=100)
    tags = models.ManyToManyField('Tag')

class Tag(models.Model):
    name = models.CharField(max_length=50)

# from django.db import models

# class Tag(models.Model):
#     name = models.CharField(max_length=50)

# class Poll(models.Model):
#     question_text = models.CharField(max_length=200)
#     tags = models.ManyToManyField(Tag)
#     options = models.ManyToManyField('Option')

# class Option(models.Model):
#     text = models.CharField(max_length=100)
#     poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
