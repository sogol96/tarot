/* ============================================================
   CONTENT — all the text on the page lives in this file.
   To change wording later, edit here only.
   ============================================================ */

/* ---------- 22 Major Arcana (reviewed against standard Rider–Waite meanings) ---------- */
const MAJORS = [
 {id:"the-fool", n:0,
  en:{name:"The Fool", up:"A beginning you can't fully plan for.", rev:"Leaping blind, or refusing to leap at all.", ask:"What would you start if you weren't worried about looking foolish?"},
  fa:{name:"دیوانه", up:"شروعی که نمی‌شود کاملاً برایش نقشه کشید.", rev:"پریدن بی‌گدار، یا اصلاً نپریدن.", ask:"اگر نگران احمق به‌نظر رسیدن نبودی، چه چیزی را شروع می‌کردی؟"}},
 {id:"the-magician", n:1,
  en:{name:"The Magician", up:"You already have the tools. Time to use them.", rev:"Scattered effort. Talk without follow-through.", ask:"Which skill are you sitting on instead of using?"},
  fa:{name:"شعبده‌باز", up:"ابزارش را همین حالا داری؛ وقت استفاده از آن است.", rev:"انرژی پخش‌وپلا، حرف بدون عمل.", ask:"کدام توانایی‌ات را بلااستفاده نگه داشته‌ای؟"}},
 {id:"the-high-priestess", n:2,
  en:{name:"The High Priestess", up:"Intuition. Something you know but haven't said out loud.", rev:"Ignoring the quiet signal.", ask:"What does your gut already know here?"},
  fa:{name:"کاهنهٔ اعظم", up:"شهود؛ چیزی که می‌دانی ولی به زبان نیاورده‌ای.", rev:"نادیده گرفتن آن صدای آرام درونی.", ask:"ته دلت از همین حالا چه می‌داند؟"}},
 {id:"the-empress", n:3,
  en:{name:"The Empress", up:"Creating, caring, making something grow.", rev:"Giving until nothing is left for you.", ask:"What are you nurturing, and at what cost?"},
  fa:{name:"امپراتریس", up:"آفریدن، مراقبت کردن، رشد دادن.", rev:"آن‌قدر دادن که برای خودت چیزی نماند.", ask:"داری از چه چیزی مراقبت می‌کنی و به چه قیمتی؟"}},
 {id:"the-emperor", n:4,
  en:{name:"The Emperor", up:"Structure, boundaries, taking charge.", rev:"Control that hardened into rigidity.", ask:"Where do you need a rule, and where do you need to break one?"},
  fa:{name:"امپراتور", up:"ساختار، مرز، در دست گرفتن کنترل.", rev:"کنترلی که به خشکی و سخت‌گیری تبدیل شده.", ask:"کجا به یک قانون نیاز داری و کجا به شکستن یکی؟"}},
 {id:"the-hierophant", n:5,
  en:{name:"The Hierophant", up:"Tradition, mentors, the way it's always been done.", rev:"Outgrowing the rules you were handed.", ask:"Whose voice is that, and do you still agree with it?"},
  fa:{name:"پیشوای معنوی", up:"سنت، استاد، «همیشه همین‌طور بوده».", rev:"بزرگ‌تر شدن از قانون‌هایی که به تو داده‌اند.", ask:"این حرف صدای کیست، و هنوز قبولش داری؟"}},
 {id:"the-lovers", n:6,
  en:{name:"The Lovers", up:"Love and connection — and a choice about what you truly value.", rev:"Disharmony. Values out of line, a decision you keep postponing.", ask:"What are you actually choosing between?"},
  fa:{name:"دلدادگان", up:"عشق و پیوند، و انتخابی دربارهٔ چیزی که واقعاً برایت ارزش دارد.", rev:"ناهماهنگی؛ ارزش‌هایی که با هم نمی‌خوانند، تصمیمی که مدام عقب می‌افتد.", ask:"واقعاً داری بین چه چیزهایی انتخاب می‌کنی؟"}},
 {id:"the-chariot", n:7,
  en:{name:"The Chariot", up:"Momentum and victory, held together by willpower.", rev:"Spinning wheels. Every direction at once.", ask:"What are you driving toward, and are you steering?"},
  fa:{name:"ارابه", up:"پیش رفتن و پیروزی، با نیروی اراده.", rev:"درجا زدن، رفتن به همهٔ جهت‌ها هم‌زمان.", ask:"به کجا می‌روی، و فرمان دست خودت است؟"}},
 {id:"strength", n:8,
  en:{name:"Strength", up:"Quiet courage. Patience beats force.", rev:"Self-doubt dressed up as being realistic.", ask:"What needs gentleness instead of pressure?"},
  fa:{name:"قدرت", up:"شجاعتِ آرام؛ صبر از زور کارسازتر است.", rev:"تردید به خود، که اسمش را گذاشته‌ای واقع‌بینی.", ask:"چه چیزی به‌جای فشار، ملایمت می‌خواهد؟"}},
 {id:"the-hermit", n:9,
  en:{name:"The Hermit", up:"Stepping back far enough to hear yourself think.", rev:"Isolation that stopped being useful.", ask:"Is this solitude, or hiding?"},
  fa:{name:"گوشه‌نشین", up:"یک قدم عقب رفتن، تا صدای خودت را بشنوی.", rev:"انزوایی که دیگر فایده‌ای ندارد.", ask:"این تنهایی است یا پنهان شدن؟"}},
 {id:"wheel-of-fortune", n:10,
  en:{name:"Wheel of Fortune", up:"Timing shifts. Cycles turn. Luck moves.", rev:"Fighting a change that already started.", ask:"What's changing whether you approve or not?"},
  fa:{name:"چرخ بخت", up:"زمانه می‌چرخد، دوره‌ها عوض می‌شوند، بخت جابه‌جا می‌شود.", rev:"جنگیدن با تغییری که شروع شده.", ask:"چه چیزی دارد عوض می‌شود، چه بخواهی چه نخواهی؟"}},
 {id:"justice", n:11,
  en:{name:"Justice", up:"Consequences, honesty, the actual facts.", rev:"Excuses, double standards, dodging the bill.", ask:"What would be fair here, even if it costs you?"},
  fa:{name:"عدالت", up:"پیامد، صداقت، واقعیت بی‌روتوش.", rev:"بهانه، استاندارد دوگانه، فرار از پاسخ‌گویی.", ask:"انصاف اینجا چه حکم می‌کند، حتی اگر به ضررت باشد؟"}},
 {id:"the-hanged-man", n:12,
  en:{name:"The Hanged Man", up:"A pause that changes your angle.", rev:"Stalling, and calling it patience.", ask:"What looks different if you stop trying to fix it?"},
  fa:{name:"مرد آویخته", up:"مکثی که زاویهٔ دیدت را عوض می‌کند.", rev:"تعلل، با اسمِ صبر.", ask:"اگر دست از درست کردنش برداری، چه شکلی می‌شود؟"}},
 {id:"death", n:13,
  en:{name:"Death", up:"An ending that makes room. Almost never literal.", rev:"Clinging to a version of your life that's already over.", ask:"What are you keeping alive out of habit?"},
  fa:{name:"مرگ", up:"پایانی که جا باز می‌کند؛ تقریباً هیچ‌وقت به معنای واقعی کلمه نیست.", rev:"چسبیدن به نسخه‌ای از زندگی‌ات که تمام شده.", ask:"چه چیزی را از سر عادت زنده نگه داشته‌ای؟"}},
 {id:"temperance", n:14,
  en:{name:"Temperance", up:"Blending. Balancing. The slow right dose.", rev:"Extremes. All or nothing.", ask:"What needs less of you, and what needs more?"},
  fa:{name:"اعتدال", up:"ترکیب کردن، تعادل، دوز درست؛ آرام و پیوسته.", rev:"افراط. همه یا هیچ.", ask:"چه چیزی کمتر از تو می‌خواهد، و چه چیزی بیشتر؟"}},
 {id:"the-devil", n:15,
  en:{name:"The Devil", up:"The thing you say you can't stop doing.", rev:"Seeing the chain, and loosening it.", ask:"What are you calling a need that's really a habit?"},
  fa:{name:"شیطان", up:"همان کاری که می‌گویی نمی‌توانی ترکش کنی.", rev:"دیدن زنجیر، و شل کردنش.", ask:"چه چیزی را نیاز می‌نامی که در واقع عادت است؟"}},
 {id:"the-tower", n:16,
  en:{name:"The Tower", up:"Sudden collapse of something that was built wrong.", rev:"Putting off a collapse that needs to happen.", ask:"What have you known was unstable for a while now?"},
  fa:{name:"برج", up:"فروریختن ناگهانی چیزی که از اول کج ساخته شده بود.", rev:"عقب انداختن فروریختنی که باید اتفاق بیفتد.", ask:"کدام قسمت را مدت‌هاست می‌دانی که لق است؟"}},
 {id:"the-star", n:17,
  en:{name:"The Star", up:"Quiet hope and healing, after a hard stretch.", rev:"Cynicism worn as armour.", ask:"What would you do if you believed it could actually work?"},
  fa:{name:"ستاره", up:"امید و التیامی آرام، بعد از یک دورهٔ سخت.", rev:"بدبینی، به‌عنوان زره.", ask:"اگر باور داشتی جواب می‌دهد، چه می‌کردی؟"}},
 {id:"the-moon", n:18,
  en:{name:"The Moon", up:"Fog, dreams, fears — things you can't see clearly yet.", rev:"The fog starting to lift.", ask:"What here do you know, and what are you imagining?"},
  fa:{name:"ماه", up:"ابهام، خواب و خیال، ترس؛ چیزی که هنوز واضح نیست.", rev:"مه دارد کنار می‌رود.", ask:"چقدرش را می‌دانی و چقدرش را ذهنت ساخته؟"}},
 {id:"the-sun", n:19,
  en:{name:"The Sun", up:"Clarity, warmth, success — being visible and fine with it.", rev:"Joy that's dimmed, or forced.", ask:"What's already good that you're not counting?"},
  fa:{name:"خورشید", up:"روشنی، گرما، موفقیت؛ دیده شدن بدون خجالت.", rev:"شادی‌ای که کم‌رنگ شده، یا زورکی است.", ask:"چه چیز خوبی هست که حسابش را نمی‌کنی؟"}},
 {id:"judgement", n:20,
  en:{name:"Judgement", up:"A reckoning. A call you can finally answer.", rev:"Harsh self-judgement that helps nobody.", ask:"What are you being asked to own?"},
  fa:{name:"داوری", up:"تسویه‌حساب؛ ندایی که بالاخره می‌توانی جوابش را بدهی.", rev:"قضاوت سختِ خودت، که به درد هیچ‌کس نمی‌خورد.", ask:"قرار است مسئولیت چه چیزی را بپذیری؟"}},
 {id:"the-world", n:21,
  en:{name:"The World", up:"A chapter closes, properly.", rev:"Almost done, and stalling at the finish line.", ask:"What deserves to be called finished?"},
  fa:{name:"جهان", up:"یک فصل، درست و حسابی، بسته می‌شود.", rev:"نزدیک خط پایان، گیر کرده.", ask:"چه چیزی لیاقت این را دارد که «تمام‌شده» صدا زده شود؟"}}
];

/* ---------- suits & ranks ---------- */
const SUITS = {
 wands:     {en:{name:"Wands",     mean:"energy, action, drive and creativity"},  fa:{name:"عصا",  mean:"انرژی، عمل، انگیزه و خلاقیت"}},
 cups:      {en:{name:"Cups",      mean:"emotions, love and relationships"},      fa:{name:"جام",  mean:"احساسات، عشق و روابط"}},
 swords:    {en:{name:"Swords",    mean:"thought, decisions, conflict and challenge"}, fa:{name:"شمشیر", mean:"فکر، تصمیم، تعارض و چالش"}},
 pentacles: {en:{name:"Pentacles", mean:"work, money, security and everyday life"}, fa:{name:"سکه", mean:"کار، پول، امنیت و زندگی روزمره"}}
};
const SUIT_ORDER = ["wands","cups","swords","pentacles"];

const RANKS = {
 ace:   {label:"Ace", en:{name:"Ace",   mean:"beginnings and potential"},              fa:{name:"آس",   mean:"شروع و پتانسیل"}},
 two:   {label:"2",   en:{name:"Two",   mean:"choice, duality or balance"},            fa:{name:"دو",   mean:"انتخاب، دوگانگی یا تعادل"}},
 three: {label:"3",   en:{name:"Three", mean:"growth and collaboration"},              fa:{name:"سه",   mean:"رشد و همکاری"}},
 four:  {label:"4",   en:{name:"Four",  mean:"stability, building a foundation"},      fa:{name:"چهار", mean:"ثبات و ساختن پایه"}},
 five:  {label:"5",   en:{name:"Five",  mean:"change, tension or challenge"},          fa:{name:"پنج",  mean:"تغییر، تنش یا چالش"}},
 six:   {label:"6",   en:{name:"Six",   mean:"harmony, help or moving forward"},       fa:{name:"شش",   mean:"هماهنگی، کمک یا حرکت رو به جلو"}},
 seven: {label:"7",   en:{name:"Seven", mean:"testing, reflection and patience"},      fa:{name:"هفت",  mean:"آزمون، بررسی و صبر"}},
 eight: {label:"8",   en:{name:"Eight", mean:"movement, progress or restriction"},     fa:{name:"هشت",  mean:"حرکت، پیشرفت یا محدودیت"}},
 nine:  {label:"9",   en:{name:"Nine",  mean:"nearing the outcome, endurance"},        fa:{name:"نه",   mean:"نزدیک شدن به نتیجه، پایداری"}},
 ten:   {label:"10",  en:{name:"Ten",   mean:"the end of a cycle, arriving at the result"}, fa:{name:"ده", mean:"پایان یک چرخه و رسیدن به نتیجه"}},
 page:  {label:"Page",   court:true, en:{name:"Page",   mean:"beginnings, learning, curiosity or a message"}, fa:{name:"پیج",    mean:"شروع، یادگیری، کنجکاوی یا یک پیام"}},
 knight:{label:"Knight", court:true, en:{name:"Knight", mean:"movement, action, adventure"},                  fa:{name:"شوالیه", mean:"حرکت، اقدام، ماجراجویی"}},
 queen: {label:"Queen",  court:true, en:{name:"Queen",  mean:"maturity, inner understanding and mastery"},    fa:{name:"ملکه",   mean:"بلوغ، درک درونی و تسلط"}},
 king:  {label:"King",   court:true, en:{name:"King",   mean:"power, responsibility and outward mastery"},    fa:{name:"پادشاه", mean:"قدرت، مسئولیت و تسلط بیرونی"}}
};
const RANK_ORDER = ["ace","two","three","four","five","six","seven","eight","nine","ten","page","knight","queen","king"];

/* ---------- 56 Minor Arcana — [en up, en rev, fa up, fa rev] ---------- */
const MINOR_MEANINGS = {
 wands:{
  ace:   ["A spark of inspiration. The urge to start something new.","A spark that doesn't catch. Delays, or motivation running low.","جرقهٔ یک الهام؛ میل به شروع کاری تازه.","جرقه‌ای که نمی‌گیرد؛ تأخیر، یا انگیزه‌ای که ته کشیده."],
  two:   ["Planning the next step, looking past what's familiar.","Playing it safe out of fear of the unknown.","برنامه‌ریزی برای قدم بعدی و نگاه کردن به فراتر از جای امن.","از ترس ناشناخته‌ها، فقط جای امن را انتخاب کردن."],
  three: ["Expansion. What you started is beginning to move.","Obstacles and delays; results slower than you hoped.","گسترش؛ چیزهایی که شروع کرده‌ای کم‌کم راه می‌افتند.","مانع و تأخیر؛ نتیجه دیرتر از آن‌چه امید داشتی می‌رسد."],
  four:  ["Celebration, home, a milestone worth marking.","Unsettled at home, or a celebration that feels hollow.","جشن، خانه، رسیدن به نقطه‌ای که ارزش جشن گرفتن دارد.","بی‌ثباتی در خانه، یا جشنی که دل آدم را گرم نمی‌کند."],
  five:  ["Competition, friction, too many voices at once.","Avoiding a conflict, or finally finding a way through it.","رقابت، اصطکاک، صداهای زیادی که هم‌زمان حرف می‌زنند.","فرار از درگیری، یا بالاخره پیدا کردن راهی برای حلش."],
  six:   ["Victory and recognition. Others see what you did.","Needing applause too much, or success that goes unnoticed.","پیروزی و دیده شدن؛ دیگران زحمتت را می‌بینند.","وابستگی به تشویق دیگران، یا موفقیتی که دیده نمی‌شود."],
  seven: ["Standing your ground under pressure.","Worn down, and tempted to give up your position.","ایستادن پای موضعت، زیر فشار.","خستگی، و وسوسهٔ کنار کشیدن."],
  eight: ["Speed. News, movement, things finally happening fast.","Delays, or rushing ahead before you're ready.","سرعت؛ خبر، حرکت، و اتفاق‌هایی که بالاخره تند پیش می‌روند.","تأخیر، یا عجله کردن پیش از آماده بودن."],
  nine:  ["Tired but still standing. The last stretch before the finish.","Exhaustion, or keeping your guard up long after it's needed.","خسته، ولی هنوز سرپا؛ آخرین قدم‌ها تا خط پایان.","فرسودگی، یا گارد گرفتنی که دیگر لازم نیست."],
  ten:   ["Carrying too much. Responsibility that became a burden.","Putting some of it down, or buckling under the weight.","حمل بار زیاد؛ مسئولیتی که به باری سنگین تبدیل شده.","زمین گذاشتن بخشی از بار، یا خم شدن زیر آن."],
  page:  ["Curiosity, excitement, news of something new to explore.","Big ideas with no follow-through; restless and unfocused.","کنجکاوی، هیجان، خبری از یک کشف تازه.","ایده‌های بزرگ بدون ادامه؛ بی‌قراری و پراکندگی."],
  knight:["Passion and adventure. Charging forward.","Recklessness. Starting fires you can't manage.","شور و ماجراجویی؛ با تمام سرعت به جلو.","بی‌پروایی؛ آتش‌هایی که روشن می‌کنی و از پسشان برنمی‌آیی."],
  queen: ["Confidence, warmth, and the courage to be seen.","Self-doubt, jealousy, or burning out while shining for others.","اعتمادبه‌نفس، گرما و جرئتِ دیده شدن.","تردید به خود، حسادت، یا تمام شدن انرژی‌ات برای درخشیدن برای دیگران."],
  king:  ["Vision and leadership. Turning an idea into a direction.","Impulsive, domineering, or expecting too much too fast.","چشم‌انداز و رهبری؛ تبدیل یک ایده به یک مسیر.","تندروی، زورگویی، یا انتظار نتیجهٔ زیاد در زمان کم."]
 },
 cups:{
  ace:   ["A new feeling opening up: love, compassion, creativity.","Feelings held back. Emptiness, or needing to love yourself first.","باز شدن یک احساس تازه: عشق، همدلی، خلاقیت.","احساسی که مهار شده؛ خالی بودن، یا نیاز به محبت کردن به خودت."],
  two:   ["Connection. Two people meeting as equals.","Imbalance, or broken communication in a bond.","پیوند؛ دو نفر که برابر به هم می‌رسند.","عدم توازن، یا گسستن ارتباط در یک رابطه."],
  three: ["Friendship, celebration, the people who lift you.","Too much of a good time, gossip, or feeling left out.","دوستی، جشن، آدم‌هایی که حالت را خوب می‌کنند.","زیاده‌روی در خوش‌گذرانی، حرف پشت سر، یا حس جا ماندن."],
  four:  ["Apathy. So busy looking inward you miss what's being offered.","Waking up from the slump; ready to say yes again.","بی‌حوصلگی؛ آن‌قدر در خودت فرورفته‌ای که فرصتی را که جلوی توست نمی‌بینی.","بیرون آمدن از رکود؛ آماده برای دوباره «بله» گفتن."],
  five:  ["Loss and regret. Staring at what spilled.","Acceptance. Turning around to see what's still standing.","از دست دادن و حسرت؛ خیره ماندن به چیزی که ریخته.","پذیرش؛ برگشتن و دیدن آن‌چه هنوز سر جایش هست."],
  six:   ["Nostalgia, childhood, simple kindness from the past.","Living in the past, or finally stepping out of it.","نوستالژی، کودکی، مهربانی ساده‌ای از گذشته.","ماندن در گذشته، یا بالاخره بیرون آمدن از آن."],
  seven: ["Too many options, and some of them are daydreams.","The fog clears. Choosing what's real.","گزینه‌های زیاد، که بعضی‌شان فقط خیال‌اند.","مه کنار می‌رود؛ انتخاب چیزی که واقعی است."],
  eight: ["Walking away from something that no longer fulfils you.","Afraid to leave, or drifting without knowing why.","ترک کردن چیزی که دیگر راضی‌ات نمی‌کند.","ترس از رفتن، یا سرگردانی بی‌آن‌که بدانی چرا."],
  nine:  ["Contentment. A wish coming true.","Satisfaction that's only on the surface.","رضایت؛ آرزویی که برآورده می‌شود.","رضایتی که فقط در ظاهر است."],
  ten:   ["Emotional fulfilment. Harmony at home.","Disconnection in a family or a close circle.","کامل شدن از نظر احساسی؛ هماهنگی در خانه و خانواده.","گسستگی در خانواده یا جمع نزدیکان."],
  page:  ["A tender message, a creative idea, emotional curiosity.","Emotional immaturity, or a creative block.","پیامی لطیف، ایده‌ای خلاقانه، کنجکاوی احساسی.","ناپختگی احساسی، یا گیر کردن در خلاقیت."],
  knight:["Romance and charm. Following your heart.","Moodiness, or promises that sound better than they are.","عاشقانه و دلربایی؛ دنبال دل رفتن.","دمدمی بودن، یا وعده‌هایی که از خودشان قشنگ‌ترند."],
  queen: ["Compassion and intuition. Caring without drowning.","Giving so much you lose yourself; overwhelmed by feeling.","همدلی و شهود؛ مراقبت کردن بدون غرق شدن.","آن‌قدر دادن که خودت را گم کنی؛ غرق شدن در احساس."],
  king:  ["Emotional balance. Calm in rough water.","Moodiness, or feelings pushed down until they leak out.","تعادل احساسی؛ آرامش در آب‌های ناآرام.","دمدمی بودن، یا احساساتی که آن‌قدر سرکوب شده‌اند که بیرون می‌زنند."]
 },
 swords:{
  ace:   ["Clarity. A breakthrough, a truth said plainly.","Confusion, or words that cut the wrong way.","وضوح؛ یک کشف، حقیقتی که ساده گفته می‌شود.","سردرگمی، یا حرف‌هایی که به جای اشتباه می‌برند."],
  two:   ["Stalemate. A decision you're avoiding.","Overwhelmed by options, or the truth finally surfacing.","بن‌بست؛ تصمیمی که از آن طفره می‌روی.","غرق شدن در گزینه‌ها، یا حقیقتی که بالاخره رو می‌شود."],
  three: ["Heartbreak. A painful truth.","Healing. Letting the hurt go.","دل‌شکستگی؛ حقیقتی دردناک.","التیام؛ رها کردن درد."],
  four:  ["Rest. Stepping back to recover.","Restlessness, burnout, or slowly coming back to life.","استراحت؛ کنار کشیدن برای جان گرفتن.","بی‌قراری، فرسودگی، یا کم‌کم دوباره جان گرفتن."],
  five:  ["A conflict where winning costs more than it's worth.","Making amends, or carrying an old resentment.","درگیری‌ای که بردنش بیشتر از ارزشش هزینه دارد.","جبران کردن و آشتی، یا کینه‌ای قدیمی که هنوز با خودت می‌بری."],
  six:   ["Transition. Leaving rough water for calmer shores.","Resisting the move, or unfinished business pulling you back.","گذار؛ ترک آب‌های ناآرام به سمت ساحلی آرام‌تر.","مقاومت در برابر رفتن، یا کار ناتمامی که عقب می‌کشدت."],
  seven: ["Strategy, secrecy, getting away with something.","Coming clean, or getting caught.","زیرکی، پنهان‌کاری، قسر در رفتن از چیزی.","اعتراف کردن، یا لو رفتن."],
  eight: ["Feeling trapped by limits that are partly in your head.","Seeing a way out. Taking the blindfold off.","حس گیر افتادن در محدودیت‌هایی که بخشی‌شان ساختهٔ ذهن خودت است.","دیدن راه خروج؛ برداشتن چشم‌بند."],
  nine:  ["Worry and sleepless nights. Anxiety louder than reality.","The worst of the worry passing; reaching out for help.","نگرانی و شب‌های بی‌خوابی؛ اضطرابی بلندتر از واقعیت.","گذشتن سخت‌ترین بخش نگرانی؛ کمک خواستن از دیگران."],
  ten:   ["A painful ending. Rock bottom, which also means no further down.","Recovering slowly, or refusing to let something end.","پایانی دردناک؛ ته خط، یعنی پایین‌تر از این نمی‌رود.","بهبودی آرام، یا اجازه ندادن به چیزی که باید تمام شود."],
  page:  ["Curiosity, sharp questions, new ideas.","Talk without substance; hasty words or gossip.","کنجکاوی، سؤال‌های تیز، ایده‌های تازه.","حرف بی‌پشتوانه؛ حرف‌های عجولانه یا شایعه."],
  knight:["Fast, driven, charging after an idea.","Rash, restless, arguing without direction.","سریع و مصمم، تاختن به دنبال یک ایده.","عجول و بی‌قرار؛ بحث کردن بدون جهت."],
  queen: ["Clear boundaries. Honesty that doesn't flinch.","Coldness, bitterness, words used as weapons.","مرزهای روشن؛ صداقتی که عقب نمی‌کشد.","سردی، تلخی، استفاده از کلمات به‌عنوان سلاح."],
  king:  ["Clear thinking, truth, fair authority.","Cold control, or using the mind to manipulate.","فکر روشن، حقیقت، اقتدار منصفانه.","کنترل سرد، یا استفاده از زیرکی برای فریب دادن."]
 },
 pentacles:{
  ace:   ["A new opportunity with real, practical ground under it.","An opportunity missed, or plans with no footing.","فرصتی تازه با پشتوانه‌ای واقعی و ملموس.","فرصتی که از دست می‌رود، یا برنامه‌ای بی‌پایه."],
  two:   ["Juggling priorities. Staying flexible.","Overcommitted. Dropping balls.","مدیریت هم‌زمان چند کار؛ انعطاف داشتن.","قبول کردن بیش از توان؛ از دست در رفتن کارها."],
  three: ["Teamwork and craft. Building something together.","Poor teamwork, or doing it all alone.","کار گروهی و مهارت؛ ساختن چیزی با هم.","هماهنگ نبودن گروه، یا انجام همه‌چیز به‌تنهایی."],
  four:  ["Holding on tight. Saving, security, control.","Clinging out of fear, or spending without a plan.","محکم نگه داشتن؛ پس‌انداز، امنیت، کنترل.","چسبیدن از سر ترس، یا خرج کردن بی‌حساب."],
  five:  ["Hard times. Feeling left out in the cold.","Recovery; help arriving, or finally asking for it.","روزهای سخت؛ حس بیرون ماندن در سرما.","بهبود؛ رسیدن کمک، یا بالاخره کمک خواستن."],
  six:   ["Giving and receiving. Generosity in balance.","Strings attached, or giving that only goes one way.","دادن و گرفتن؛ سخاوتی متعادل.","کمکی که شرط و شروط دارد، یا دادنی که یک‌طرفه است."],
  seven: ["Patience. Checking on what you've planted.","Impatience, or effort that isn't paying off.","صبر؛ سر زدن به چیزی که کاشته‌ای.","بی‌صبری، یا تلاشی که نتیجه نمی‌دهد."],
  eight: ["Practice and craft. Getting better one piece at a time.","Perfectionism, or going through the motions.","تمرین و مهارت؛ هر بار کمی بهتر شدن.","کمال‌گرایی، یا کار کردن از روی عادت و بی‌انگیزه."],
  nine:  ["Independence and comfort you built yourself.","Over-investing in work, or security that feels shaky.","استقلال و آسایشی که خودت ساخته‌ای.","غرق شدن در کار، یا امنیتی که لرزان به نظر می‌رسد."],
  ten:   ["Lasting security. Family, legacy, roots.","Strain over money or inheritance; foundations wobbling.","امنیت پایدار؛ خانواده، میراث، ریشه.","تنش بر سر پول یا ارث؛ لرزیدن پایه‌ها."],
  page:  ["Learning something new with a practical goal.","Procrastination; plans that stay plans.","یاد گرفتن چیزی تازه با هدفی عملی.","اهمال‌کاری؛ برنامه‌هایی که فقط برنامه می‌مانند."],
  knight:["Steady, reliable work. Slow and sure.","Stuck in routine, bored, or stalling.","کار پیوسته و قابل‌اعتماد؛ آهسته و پیوسته.","گیر افتادن در روزمرگی، کسالت یا درجا زدن."],
  queen: ["Practical care. Making life comfortable for yourself and others.","Work and home out of balance; neglecting yourself.","مراقبت عملی؛ راحت کردن زندگی برای خودت و دیگران.","به هم خوردن تعادل کار و خانه؛ نادیده گرفتن خودت."],
  king:  ["Stability, abundance, discipline that pays off.","Stubbornness, or measuring everything in money.","ثبات، فراوانی، نظمی که نتیجه می‌دهد.","یک‌دندگی، یا سنجیدن همه‌چیز با پول."]
 }
};

/* build the full 78-card list */
const CARDS = [
 ...MAJORS.map(c => ({...c, arc:"major"})),
 ...SUIT_ORDER.flatMap(s => RANK_ORDER.map(r => {
   const m = MINOR_MEANINGS[s][r];
   return {
     id:`${r}-of-${s}`, arc:"minor", suit:s, rank:r,
     en:{name:`${RANKS[r].en.name} of ${SUITS[s].en.name}`, up:m[0], rev:m[1]},
     fa:{name:`${RANKS[r].fa.name} ${SUITS[s].fa.name}`,   up:m[2], rev:m[3]}
   };
 }))
];
const CARD_BY_ID = Object.fromEntries(CARDS.map(c => [c.id, c]));

/* ---------- spreads (from Sogol's document) ---------- */
const SPREADS = [
 {id:"one", layout:"row",
  en:{chip:"One card", title:"One-card reading",
      intro:"Hold a question or a topic in mind, shuffle the cards and draw one. Then see what the card says about your question.",
      examples:["What should I pay attention to today?","What is the energy of this situation?","What am I not seeing here?","What would be better to focus on?"],
      pos:[{l:"Your card", q:""}]},
  fa:{chip:"یک کارت", title:"فال یک‌کارتی",
      intro:"یک سؤال یا موضوع در ذهنت داشته باش، کارت‌ها را بُر بزن و یک کارت از دسته بکش. بعد ببین کارت دربارهٔ سؤال تو چه می‌گوید.",
      examples:["امروز باید به چه چیزی توجه کنم؟","انرژی این موقعیت چیست؟","چه چیزی را در این شرایط نمی‌بینم؟","به چه چیزی بهتر است توجه کنم؟"],
      pos:[{l:"کارت تو", q:""}]}},
 {id:"two", layout:"row",
  en:{chip:"Two cards", title:"Two-card reading",
      intro:"Shuffle, draw two cards and place each one in its position, from left to right.",
      pos:[{l:"Situation", q:"What is happening right now?"},{l:"Guidance", q:"What would be better to pay attention to?"}]},
  fa:{chip:"دو کارت", title:"فال دوکارتی",
      intro:"کارت‌ها را بُر بزن، دو کارت بکش و از چپ به راست هر کارت را در جایگاه خودش بگذار.",
      pos:[{l:"موقعیت", q:"چه چیزی در حال اتفاق افتادن است؟"},{l:"راهنمایی", q:"به چه چیزی بهتر است توجه کنم؟"}]}},
 {id:"yesno", layout:"row",
  en:{chip:"Yes / No", title:"Yes / No reading",
      intro:"Shuffle, draw two cards and place them in their positions, from left to right.",
      pos:[{l:"Yes", q:"If the answer is “yes”, what energy shows up?"},{l:"No", q:"If the answer is “no”, what energy shows up?"}],
      after:"Compare the two cards. If one has a brighter, stronger energy, it may be closer to the answer. If both feel neutral, the answer is “not clear yet”."},
  fa:{chip:"بله / خیر", title:"فال بله / خیر",
      intro:"کارت‌ها را بُر بزن، دو کارت بکش و از چپ به راست در جایگاه خودشان بگذار.",
      pos:[{l:"بله", q:"اگر پاسخ «بله» باشد، چه انرژی‌ای دیده می‌شود؟"},{l:"خیر", q:"اگر پاسخ «خیر» باشد، چه انرژی‌ای دیده می‌شود؟"}],
      after:"کارت‌ها را با هم مقایسه کن. اگر یکی انرژی روشن‌تر و قوی‌تری داشت، می‌تواند به پاسخ نزدیک‌تر باشد. اگر هر دو خنثی بودند، جواب «هنوز مشخص نیست» است."}},
 {id:"three", layout:"row", alt:"three2",
  en:{chip:"Three cards", title:"Three-card reading",
      intro:"Shuffle, draw three cards and place each one in its position, from left to right.",
      pos:[{l:"Past", q:"What from the past has shaped this situation?"},{l:"Present", q:"What is happening now?"},{l:"Future", q:"If things carry on as they are, what path might lie ahead?"}],
      note:"See the future as a possibility, not a certainty."},
  fa:{chip:"سه کارت", title:"فال سه‌کارتی",
      intro:"کارت‌ها را بُر بزن، سه کارت بکش و از چپ به راست هر کارت را در جایگاه خودش بگذار.",
      pos:[{l:"گذشته", q:"چه چیزی از گذشته روی این موقعیت تأثیر گذاشته؟"},{l:"حال", q:"الان چه چیزی در جریان است؟"},{l:"آینده", q:"اگر شرایط به همین شکل ادامه پیدا کند، چه مسیری ممکن است پیش رو باشد؟"}],
      note:"آینده را به‌عنوان یک احتمال ببین، نه یک اتفاق قطعی."}},
 {id:"three2", layout:"row", isAlt:true,
  en:{chip:"Three · specific question", title:"Three cards, for a specific question",
      intro:"If you have a more specific question, you can use this version:",
      pos:[{l:"Situation", q:"What is happening?"},{l:"Challenge", q:"What is making it hard?"},{l:"Guidance", q:"What would be better to pay attention to?"}]},
  fa:{chip:"سه کارت · سؤال مشخص", title:"سه‌کارتی برای سؤال مشخص",
      intro:"اگر سؤال مشخص‌تری داری، می‌توانی از این مدل استفاده کنی:",
      pos:[{l:"موقعیت", q:"چه اتفاقی در حال افتادن است؟"},{l:"چالش", q:"چه چیزی کار را سخت می‌کند؟"},{l:"راهنمایی", q:"به چه چیزی بهتر است توجه کنم؟"}]}},
 {id:"four", layout:"square",
  en:{chip:"Four cards", title:"Four-card reading",
      intro:"Lay the cards out in a square.",
      pos:[{l:"Current state", q:"What is happening right now?"},{l:"Obstacle or challenge", q:"What stands in your way?"},{l:"Help", q:"What can help you?"},{l:"Likely outcome", q:"If things carry on this way, what outcome is likely?"}]},
  fa:{chip:"چهار کارت", title:"فال چهارکارتی",
      intro:"کارت‌ها را به شکل مربع بچین.",
      pos:[{l:"وضعیت فعلی", q:"الان چه چیزی در حال اتفاق افتادن است؟"},{l:"مانع یا چالش", q:"چه چیزی سر راهت قرار دارد؟"},{l:"کمک", q:"چه چیزی می‌تواند به تو کمک کند؟"},{l:"نتیجهٔ احتمالی", q:"اگر شرایط به همین شکل پیش برود، چه نتیجه‌ای محتمل است؟"}]}},
 {id:"love", layout:"row", alt:"love4",
  en:{chip:"Love", title:"Love reading",
      intro:"Draw three cards and lay them out from left to right.",
      pos:[{l:"Your feelings", q:"How do you feel about this person or relationship?"},{l:"Their feelings", q:"How does the other person feel about you or this relationship?"},{l:"The relationship's future", q:"Where is the relationship heading?"}]},
  fa:{chip:"عشق", title:"فال عشق",
      intro:"سه کارت بکش و از چپ به راست بچین.",
      pos:[{l:"احساسات تو", q:"تو نسبت به این شخص یا رابطه چه احساسی داری؟"},{l:"احساسات طرف مقابل", q:"طرف مقابل چه احساسی نسبت به تو یا این رابطه دارد؟"},{l:"آیندهٔ رابطه", q:"رابطه به چه سمتی می‌رود؟"}]}},
 {id:"love4", layout:"square", isAlt:true,
  en:{chip:"Love · four cards", title:"Love reading, four-card version",
      intro:"A deeper version with four cards:",
      pos:[{l:"Where the relationship stands", q:"What state is the relationship in right now?"},{l:"What you should know", q:"What is important to know about this relationship?"},{l:"Obstacle", q:"What has come between you?"},{l:"Outcome or advice", q:"What path forward can be seen for this relationship?"}]},
  fa:{chip:"عشق · چهار کارت", title:"نسخهٔ چهارکارتی فال عشق",
      intro:"نسخهٔ عمیق‌تر، با چهار کارت:",
      pos:[{l:"وضعیت فعلی رابطه", q:"الان رابطه در چه شرایطی قرار دارد؟"},{l:"چیزی که باید بدانی", q:"چه چیزی دربارهٔ این رابطه مهم است که بهتر است بدانی؟"},{l:"مانع", q:"چه چیزی بین شما قرار گرفته است؟"},{l:"نتیجه یا پیشنهاد", q:"چه مسیری برای ادامهٔ این رابطه دیده می‌شود؟"}]}},
 {id:"money", layout:"row",
  en:{chip:"Work & money", title:"Work & money reading",
      intro:"Draw three cards and lay them out from left to right.",
      pos:[{l:"Current state", q:"Where do you stand with work or money right now?"},{l:"Challenge or obstacle", q:"What stands in your way?"},{l:"Advice or outcome", q:"What should you pay attention to, and what might happen?"}]},
  fa:{chip:"کار و پول", title:"فال کار و پول",
      intro:"سه کارت بکش و از چپ به راست بچین.",
      pos:[{l:"وضعیت فعلی", q:"الان در کار یا مسائل مالی کجا ایستاده‌ای؟"},{l:"چالش یا مانع", q:"چه چیزی سر راهت قرار دارد؟"},{l:"پیشنهاد یا نتیجه", q:"به چه چیزی بهتر است توجه کنی و چه اتفاقی ممکن است بیفتد؟"}]}}
];
const SPREAD_BY_ID = Object.fromEntries(SPREADS.map(s => [s.id, s]));

/* ---------- page text ---------- */
const T = {
 fa:{
  dir:"rtl", docTitle:"سی سالگی — راهنمای تاروت",
  title:"سی سالگی", sub:"راهنمای تاروت", meta:"طراحی و تصویرسازی: سوگل محزون",

  drawEyebrow:"فال بگیر", drawTitle:"یک چیدمان انتخاب کن",
  drawHint:"سؤالت را در ذهن نگه دار و روی کارت‌ها بزن تا یکی‌یکی برگردند.",
  examplesLabel:"مثلاً می‌توانی بپرسی:",
  reversals:"کارت وارونه", on:"روشن", off:"خاموش",
  reshuffle:"دوباره بُر بزن", revealAll:"همه را برگردان",
  upright:"مستقیم", reversed:"وارونه",
  storyNote:"حالا کارت‌ها را کنار هم ببین. قرار نیست هر کارت به‌تنهایی معنی جدایی داشته باشد؛ چند کارت کنار هم یک داستان می‌سازند.",
  cardN:n=>`کارت ${["اول","دوم","سوم","چهارم"][n]}`,
  tapToFlip:"برگرداندن کارت",

  whatEyebrow:"۰۱", whatTitle:"تاروت چیست؟",
  what:[
   "تاروت یک دستهٔ ۷۸کارتی است که هر کارتش تصویر و نمادهای خاص خودش را دارد. این کارت‌ها امروزه بیشتر برای سرگرمی، فال و داستان‌گویی استفاده می‌شوند.",
   "تاروت در ابتدا برای فال ساخته نشده بود؛ قدیمی‌ترین نمونه‌هایش در ایتالیای قرن پانزدهم برای یک بازی کارتی استفاده می‌شدند و ارتباط تاروت با فال‌گیری چند قرن بعد شکل گرفت. بعضی از کارت‌های قدیمی حتی با دست نقاشی و با ورق طلا تزئین شده بودند.",
   "یک دستهٔ تاروت شامل ۲۲ کارت <b>آرکانای کبیر</b> (Major Arcana) و ۵۶ کارت <b>آرکانای صغیر</b> (Minor Arcana) است."
  ],

  cardsEyebrow:"۰۲", cardsTitle:"کارت‌های تاروت",
  majorTitle:"آرکانای کبیر", majorEn:"Major Arcana",
  majorText:"۲۲ کارت که هر کدام یک مضمون بزرگ زندگی را نشان می‌دهند. هر کارت یک معنی مستقیم دارد و یک معنی وارونه.",
  minorTitle:"آرکانای صغیر", minorEn:"Minor Arcana",
  minorText:"۵۶ کارت در چهار دسته:",
  libTitle:"همهٔ ۷۸ کارت", libHint:"روی هر کارت بزن تا معنی‌اش را ببینی.",
  tabMajor:"کبیر",
  askLabel:"با این سؤال بمان:",
  prev:"قبلی", next:"بعدی", close:"بستن",

  numbersTitle:"اعداد چه معنی‌ای دارند؟",
  numbersText:"اگر کارتی از آرکانای صغیر آمد، می‌توانی از ترکیب «عدد + دسته» برای فهمیدن معنی اولیه‌اش استفاده کنی:",
  courtTitle:"<bdi>Court Cards</bdi> چه معنی‌ای دارند؟",
  courtText:"در هر دسته چهار کارت <bdi>Page</bdi>، <bdi>Knight</bdi>، <bdi>Queen</bdi> و <bdi>King</bdi> وجود دارد:",
  exampleLabel:"مثلاً:",
  exampleOut:"پس می‌تواند به شروع یک احساس جدید، کنجکاوی عاطفی یا یک پیام احساسی اشاره کند.",
  builderTitle:"خودت امتحان کن",
  builderText:"یک عدد و یک دسته انتخاب کن تا ترکیبشان را ببینی.",
  builderOpen:"دیدن معنی کامل کارت",
  combo:(r,s)=>`${r} + ${s}`,

  spreadsEyebrow:"۰۳", spreadsTitle:"چیدمان‌ها",
  tryIt:"همین فال را بگیر",
  orSpecific:"یا اگر سؤال مشخص‌تری داری:",

  howEyebrow:"۰۴", howTitle:"چطور کار می‌کند؟",
  howLead:"برای تفسیر یک کارت:",
  how:[
   "سؤال خودت را یادت بیاور.",
   "به تصویر کارت نگاه کن.",
   "معنی کارت را بخوان و ببین کدام بخش از آن با موقعیت تو ارتباط دارد.",
   "اگر کارت وارونه آمده بود، معنی وارونه (Reversed) را بخوان.",
   "اگر چند کارت داری، آن‌ها را کنار هم ببین. قرار نیست هر کارت به‌تنهایی یک معنی جدا داشته باشد؛ چند کارت کنار هم می‌توانند یک داستان بسازند."
  ],
  howLast:"و مهم‌تر از همه: تاروت قرار نیست به‌جای تو تصمیم بگیرد. از آن برای سرگرمی و دیدن از یک زاویهٔ تازه استفاده کن.",

  aboutEyebrow:"۰۵", aboutTitle:"دربارهٔ تاروت سی‌سالگی",
  about:"این آخرین چیزی است که در دههٔ بیست‌سالگی‌ام ساختم. لازم بود این فصل را با تمام کردن چیزی ترک کنم. این دسته کارت خداحافظی من با بیست‌ونه شد و اولین قدمم به سی. اگر الان دستت گرفته‌ای، در تکه‌ای کوچک از آن مسیر با من همراه شده‌ای.",
  sig:"— سوگل محزون",
  footer:"طراحی و تصویرسازی: سوگل محزون"
 },

 en:{
  dir:"ltr", docTitle:"Turning Thirty — A Tarot Guide",
  title:"Turning Thirty", sub:"A Tarot Guide", meta:"DESIGNED & ILLUSTRATED BY SOGOL MAHZOUN",

  drawEyebrow:"DRAW", drawTitle:"Pick a spread",
  drawHint:"Keep your question in mind and tap the cards to turn them over, one by one.",
  examplesLabel:"For example, you could ask:",
  reversals:"Reversed cards", on:"On", off:"Off",
  reshuffle:"Shuffle again", revealAll:"Turn them all",
  upright:"UPRIGHT", reversed:"REVERSED",
  storyNote:"Now look at the cards together. Each card doesn't need its own separate answer — side by side, they tell a story.",
  cardN:n=>`Card ${n+1}`,
  tapToFlip:"Turn card over",

  whatEyebrow:"01", whatTitle:"What is tarot?",
  what:[
   "Tarot is a deck of 78 cards, each with its own image and symbols. Today the cards are mostly used for fun, fortune-telling and storytelling.",
   "Tarot wasn't made for fortune-telling at first. The oldest decks were used in fifteenth-century Italy for a card game, and the link between tarot and divination only formed a few centuries later. Some of the old cards were even hand-painted and decorated with gold leaf.",
   "A tarot deck has 22 <b>Major Arcana</b> cards and 56 <b>Minor Arcana</b> cards."
  ],

  cardsEyebrow:"02", cardsTitle:"The cards",
  majorTitle:"Major Arcana", majorEn:"",
  majorText:"22 cards, each showing one of life's big themes. Every card has an upright meaning and a reversed one.",
  minorTitle:"Minor Arcana", minorEn:"",
  minorText:"56 cards in four suits:",
  libTitle:"All 78 cards", libHint:"Tap any card to read its meaning.",
  tabMajor:"Major",
  askLabel:"Sit with:",
  prev:"Previous", next:"Next", close:"Close",

  numbersTitle:"What do the numbers mean?",
  numbersText:"When a Minor Arcana card comes up, you can combine number + suit to find its basic meaning:",
  courtTitle:"What do the court cards mean?",
  courtText:"Each suit has four court cards — Page, Knight, Queen and King:",
  exampleLabel:"For example:",
  exampleOut:"So it can point to the start of a new feeling, emotional curiosity, or a heartfelt message.",
  builderTitle:"Try it yourself",
  builderText:"Pick a number and a suit to see how they combine.",
  builderOpen:"Read the full card",
  combo:(r,s)=>`${r} + ${s}`,

  spreadsEyebrow:"03", spreadsTitle:"Spreads",
  tryIt:"Try this spread",
  orSpecific:"Or, if you have a more specific question:",

  howEyebrow:"04", howTitle:"How does it work?",
  howLead:"To read a card:",
  how:[
   "Remember your question.",
   "Look at the picture on the card.",
   "Read the card's meaning and notice which part of it connects to your situation.",
   "If the card came up upside down, read the Reversed meaning.",
   "If you have several cards, look at them side by side. Each card doesn't need a separate meaning of its own; together, cards can tell a story."
  ],
  howLast:"And most importantly: tarot isn't here to make decisions for you. Use it for fun, and for seeing things from a fresh angle.",

  aboutEyebrow:"05", aboutTitle:"About Turning Thirty",
  about:"This is the last thing I created in my twenties. I needed to leave this chapter by finishing something that truly mattered to me. This deck became my farewell to 29 and my first step into 30. If you're holding it now, you're holding a small piece of that journey.",
  sig:"— Sogol Mahzoun",
  footer:"Designed & illustrated by Sogol Mahzoun"
 }
};

const INSTAGRAM = "sogol.mahzoun";
