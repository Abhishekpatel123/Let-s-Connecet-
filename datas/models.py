from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE

# Create your models here.
 # queston model 
class Question(models.Model):
     user=models.ForeignKey(User,on_delete=models.CASCADE)
     title=models.CharField(max_length=500)
     details=models.TextField()
     add_time=models.DateTimeField(auto_now_add=True)

     def __str__(self):
         return self.title




class Answer(models.Model):
    question=models.ForeignKey(Question,on_delete=models.CASCADE)
    details=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

    def __str__(self):
         return self.details


#Comment
class Comment(models.Model):
    answer=models.ForeignKey(Answer,on_delete=models.CASCADE)
    user=models.ForeignKey(User,on_delete=models.CASCADE , related_name='comment_user')
    add_time=models.DateTimeField(auto_now_add=True)
    

    

#upvote
class Upvote(models.Model):
    answer=models.ForeignKey(Answer,on_delete=models.CASCADE)
    user=models.ForeignKey(User,on_delete=models.CASCADE , related_name='upvote_user')
     


#downvote
class Downvote(models.Model):
    answer=models.ForeignKey(Answer,on_delete=models.CASCADE)
    user=models.ForeignKey(User,on_delete=models.CASCADE , related_name='downvote_user')
     



