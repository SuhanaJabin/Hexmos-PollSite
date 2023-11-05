from django.urls import path
from . import views
from .views import get_polls_data

app_name = 'polls'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
    # path('get-polls-data/<int:pk>', views.get_polls_data, name='get_polls_data'),
    path('get-polls-data/', views.all_data, name='sget_polls_data'),
    path('get-csrf-token/', views.get_csrf_token, name='get_csrf_token'),
    path('question/', views.createQuestion, name='my_view'),
    # path('pollsurl/', views.filtered_polls, name='filtered_polls'),
    # path('pollstag/', views.filtered_polls, name='filtered_polls'),
    path('pollstag/', views.filtered_tags, name='filtered_polls'),
    path('list_tags/', views.list_tags, name='list_tags'),
    path('get-polls-data/<int:pk>', views.get_questions_data, name='get_poll_details'),
    path('pollsid/<int:poll_id>/', views.get_poll_detailsid, name='get_poll_details'),
    path('pollsvote/<int:pk>/', views.incVote, name='incrementing')

]
# urlpatterns = [
#     path('',views.index,name='index'),

#     path('<int:question_id>/',views.detail,name='detail'),

#     path('<int:question_id>/results/', views.results,name='results'),

#     path('<int:question_id>/vote/',views.vote,name='vote'),
# ]