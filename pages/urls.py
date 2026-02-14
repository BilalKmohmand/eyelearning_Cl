"""URL configuration for pages app"""
from django.urls import path
from . import views

urlpatterns = [
    # Root redirect
    path('', views.index_redirect, name='index_redirect'),
    
    # US homepage
    path('US/index.do', views.us_index, name='us_index'),
    path('US/contactProc.do', views.contact_proc, name='contact_proc'),
    
    # Programs
    path('US/programs/intro.do', views.programs_intro, name='programs_intro'),
    path('US/programs/math.do', views.programs_math, name='programs_math'),
    path('US/programs/english.do', views.programs_english, name='programs_english'),
    path('US/programs/summit_of_math.do', views.programs_summit_of_math, name='programs_summit_of_math'),

    # Global Events
    path('US/global-events/intro.do', views.global_events_intro, name='global_events_intro'),
    path('US/global-events/math-olympiad/intro.do', views.global_events_math_olympiad_intro, name='global_events_math_olympiad_intro'),
    path('US/global-events/literary-award/intro.do', views.global_events_literary_award_intro, name='global_events_literary_award_intro'),
    path('US/global-events/mun-camp/intro.do', views.global_events_mun_camp_intro, name='global_events_mun_camp_intro'),
    path('US/global-events/oratacular/intro.do', views.global_events_oratacular_intro, name='global_events_oratacular_intro'),
    
    # Why Eye Level
    path('US/why-eye-level/intro.do', views.why_intro, name='why_intro'),
    path('US/why-eye-level/find-a-center.do', views.find_center, name='why_find_center'),
    
    # About Eye Level
    path('US/about-eye-level/brand-story.do', views.about_brand, name='about_brand'),
    
    # Customer
    path('US/customer/contact-us.do', views.contact_us, name='contact_us'),
    path('US/customer/contact-us-finish.do', views.contact_us_finish, name='contact_us_finish'),
    path('US/customer/find-a-center.do', views.find_center, name='find_center'),
    path('US/customer/verifyRecaptcha.do', views.verify_recaptcha, name='verify_recaptcha'),
    
    # Resources
    path('US/resources/blog/articles/list.do', views.blog_list, name='blog_list'),
    path('US/resources/press-release/list.do', views.press_list, name='press_list'),
    path('US/resources/testimonial/list.do', views.testimonial_list, name='testimonial_list'),
    
    # Footer
    path('US/footer/faq.do', views.faq, name='faq'),
    path('US/footer/sitemap.do', views.sitemap, name='sitemap'),
    path('US/footer/getPrivacyPolicy_2023.do', views.privacy, name='privacy'),
    path('US/footer/cookie-policy.do', views.cookie_policy, name='cookie_policy'),
    path('US/footer/global-network/subsidiary-contacts.do', views.global_network, name='global_network'),
    path('US/footer/global-network/global-partner-contacts.do', views.global_partner_contacts, name='global_partner_contacts'),
    
    # Careers
    path('US/careers/careers.do', views.careers, name='careers'),

    # Catch-all for any US .do page that has a matching local template
    path('US/<path:template_path>.do', views.us_template_router, name='us_template_router'),
]
