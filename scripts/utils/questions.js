const allQuestions = [
    {					
        id	:	1	,		
        ru	:	"	Как дела? Как поживаешь? Как жизнь? Как ваш день? Что нового? Чё каво?	"	,
        eng	:	"	How are you? How are you doing? How is life? How is your day? How is it going? What's up? What's new?	"	
        }	,				
        {					
        id	:	2	,		
        ru	:	"	Сколько вам/тебе лет? - I am always ighteen. (не обязательно говорить years old)	"	,
        eng	:	"	How old are you?	"	
        }	,				
        {					
        id	:	3	,		
        ru	:	"	Какого цвета твои глаза? My eyes are blue	"	,
        eng	:	"	What color are your eyes?	"	
        }	,				
        {					
        id	:	4	,		
        ru	:	"	Откуда ты родом? I am from Zimbabwe	"	,
        eng	:	"	Where are you from?	"	
        }	,				
        {					
        id	:	5	,		
        ru	:	"	Какой твой номер телефона? My phone number is +007	"	,
        eng	:	"	What is your phone number?	"	
        }	,				
        {					
        id	:	6	,		
        ru	:	"	Какой твой любимый цвет? My favorite color is blue	"	,
        eng	:	"	What is your favorite color?	"	
        }	,				
        {					
        id	:	7	,		
        ru	:	"	Какой твой любимый фрукт? My favorite fruit is a banana	"	,
        eng	:	"	What is your favorite fruit?	"	
        }	,				
        {					
        id	:	8	,		
        ru	:	"	Какое твое любимое животное? My favorite animal is an eagle (орёл) it is a bird /бёд/	"	,
        eng	:	"	What is your favorite animal?	"	
        }	,				
        {					
        id	:	9	,		
        ru	:	"	Сколько лет твоему лучшему другу? My best friend is 21	"	,
        eng	:	"	How old is your best friend?	"	
        }	,				
        {					
        id	:	10	,		
        ru	:	"	Кто твой учитель английского? My teacher of English is Vin50cent	"	,
        eng	:	"	Who is your teacher of English?	"	
        }	,				
        {					
        id	:	11	,		
        ru	:	"	Какого цвета глаза у винсента? They are blue color	"	,
        eng	:	"	What color are Vincent's eyes?	"	
        }	,				
        {					
        id	:	12	,		
        ru	:	"	Сколько время сейчас у тебя? It is 8:15pm now (eight fifteen) . 20:15 (Twenty fifteen)	"	,
        eng	:	"	What time is it now at your place?	"	
        }	,				
        {					
        id	:	13	,		
        ru	:	"	Как зовут твою маму?  My mom's name is Alla	"	,
        eng	:	"	What is your mother's name? 	"	
        }	,				
        {					
        id	:	14	,		
        ru	:	"	Где ты сейчас? На какой улице? I'm at Fifth Avenue now	"	,
        eng	:	"	Where are you now? What street?  	"	
        }	,				
        {					
        id	:	15	,		
        ru	:	"	Что тыделал вчера? Назови три вещи. I worked and studied and went to a bar.	"	,
        eng	:	"	What 3 things did you do yesterday?	"	
        }	,				
        {					
        id	:	16	,		
        ru	:	"	Что собираешься кушать сегодня? I'm going to eat lasagna	"	,
        eng	:	"	What are you going to eat today?	"	
        }	,				
        {					
        id	:	17	,		
        ru	:	"	Что собираешься делать сегодня? I'm going to watch youtube.	"	,
        eng	:	"	What are you going to do today?	"	
        }	,				
        {					
        id	:	18	,		
        ru	:	"	Что собираешься делать завтра? I'm going to study English all day	"	,
        eng	:	"	What are you going to do tomorrow?	"	
        }	,				
        {					
        id	:	19	,		
        ru	:	"	Что собираешься делать на выходных? I'm going to relax and eat sushi	"	,
        eng	:	"	What are you going to do on the weekends?	"	
        }	,				
        {					
        id	:	20	,		
        ru	:	"	Чем ты обычно занимаешься в свое свободное время? I usually read books, watch movies, or hang out with friends.	"	,
        eng	:	"	What do you usually do in your free time?	"	
        }	,				
        {					
        id	:	21	,		
        ru	:	"	Чем собираешься заняться в пятницу вечером? My friends and I are gonna have a party	"	,
        eng	:	"	What are you going to do on Friday in the evening?	"	
        }	,				
        {					
        id	:	22	,		
        ru	:	"	Тебе нравится читать книги? I don't really like to read books. 	"	,
        eng	:	"	Do you like to read  books?	"	
        }	,				
        {					
        id	:	23	,		
        ru	:	"	Тебе нравится смотреть сериалы? I like to watch TV-series during my breakfast	"	,
        eng	:	"	Do you like to watch TV-series? 	"	
        }	,				
        {					
        id	:	24	,		
        ru	:	"	Какой был твой любимый мультик в детстве? In my childhood my favorite cartoon was NU POGODI!	"	,
        eng	:	"	What was your favorite cartoon in your childhood?	"	
        }	,				
        {					
        id	:	25	,		
        ru	:	"	Ты ходишь в спортзал? Как часто? По каким дням? I go two times a week. On Monday and Wednesday.	"	,
        eng	:	"	Do you go to the GYM? How often? What days?	"	
        }	,				
        {
            id: 26,
            ru: "Какое сейчас время года?",
            eng: "What season is it now? /сИзн/"
        },
        {
            id: 27,
            ru: "Какой сейчас месяц?",
            eng: "What month is it now? /маАнth/"
        },
        {
            id: 28,
            ru: "Число какое сегодня? Какая дата сегодня?",
            eng: "What date is it now? /дЭйт/"
        },
        {					
            id	:	29	,		
            ru	:	"	Чем ты занимался вчера вечером с часу до трёх? I was playing the guitar	"	,
            eng	:	"	What were you doing yesterday from 1 pm till 3 ? 	"	
            }	,				
            {					
            id	:	30	,		
            ru	:	"	опаньки… а перевод еще не загрузился… но вопрос не сложный же, да?!	"	,
            eng	:	"	What else did you do yesterday? Tell 3 facts, please	"	
            }	,				
            {					
            id	:	31	,		
            ru	:	"	опаньки… а перевод еще не загрузился… но вопрос не сложный же, да?!	"	,
            eng	:	"	What were your friends doing from 5 till 6 pm?	"	
            }	,				
            {					
            id	:	32	,		
            ru	:	"	опаньки… а перевод еще не загрузился… но вопрос не сложный же, да?!	"	,
            eng	:	"	What did you do after that? 	"	
            }	,				
            {					
            id	:	33	,		
            ru	:	"	опаньки… а перевод еще не загрузился… но вопрос не сложный же, да?!	"	,
            eng	:	"	And what were you doing at this time yesterday?  	"	
            }	,				
            {					
            id	:	34	,		
            ru	:	"	опаньки… а перевод еще не загрузился… но вопрос не сложный же, да?!	"	,
            eng	:	"	What do you want to do later tonight?	"	
            }	,				
            {					
            id	:	35	,		
            ru	:	"	опаньки… а перевод еще не загрузился… но вопрос не сложный же, да?!	"	,
            eng	:	"	How long were you doing it?	"	
            }	,				
            {					
            id	:	36	,		
            ru	:	"	опаньки… а перевод еще не загрузился… но вопрос не сложный же, да?!	"	,
            eng	:	"	What are you going to do next week?	"	
            }	,				
    
    ]
export default allQuestions
