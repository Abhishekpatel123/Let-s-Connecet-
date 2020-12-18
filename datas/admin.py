from datas.models import Answer, Comment, Downvote, Question, Upvote
from django.contrib import admin

# Register your models here.
class QuestionAdmin(admin.ModelAdmin):
    list_display=('title','user')

admin.site.register(Question,QuestionAdmin )
admin.site.register(Answer)
admin.site.register(Comment)
admin.site.register(Upvote)
admin.site.register(Downvote)