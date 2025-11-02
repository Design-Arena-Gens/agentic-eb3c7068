export default function Home() {
  const highlights = [
    {
      title: "حماية واسعة الطيف SPF 50",
      description:
        "تركيبة متقدمة بمرشحات UVA/UVB تحمي بشرتك من أعمق أضرار الشمس والبقع الداكنة.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
        >
          <path
            d="M12 3v3m0 12v3m9-9h-3M6 12H3m2.636 6.364 2.121-2.121M16.95 7.05l2.121-2.121M18.364 18.364l-2.121-2.121M7.05 7.05 4.929 4.929"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="5" fill="currentColor" opacity={0.12} />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      ),
    },
    {
      title: "لمسة نهائية مخملية",
      description:
        "قوام خفيف يمتص خلال 30 ثانية ليترك البشرة حريرية دون لمعان أو أثر أبيض.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
        >
          <path
            d="M4.5 12.75c3-1.5 12-1.5 15 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9 16.5c1 .75 5 .75 6 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9.5 7c.75 1.2 2.45 2 3.5 2s2.75-.8 3.5-2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "ترطيب نباتي 12 ساعة",
      description:
        "مزيج من حمض الهيالورونيك وماء الصبار ينشط حاجز البشرة ويرطبها طوال اليوم.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
        >
          <path
            d="M12 3s5 5.25 5 9.75A5 5 0 1 1 7 12.75C7 8.25 12 3 12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 13.125a1.5 1.5 0 0 1-3 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  const stats = [
    { label: "اختبار حساسية", value: "0 تهيج مسجل" },
    { label: "رضا المستخدمين", value: "97٪ بشرة أكثر إشراقاً" },
    { label: "مقاومة الماء", value: "90 دقيقة متواصلة" },
  ];

  const steps = [
    "رُج الزجاجة جيداً حتى تمتزج التركيبة الفاخرة.",
    "رش على مسافة 15 سم بحركات دائرية تغطي الوجه والجسم.",
    "دلّك بلطف حتى يختفي الرذاذ، وأعد التطبيق كل ساعتين تحت الشمس.",
  ];

  const testimonials = [
    {
      quote:
        "خفيف جداً على البشرة وريحته منعشة. لأول مرة أجد واقي شمس لا يترك طبقة لامعة.",
      name: "نورا، خبيرة تجميل",
    },
    {
      quote:
        "أفضل رفيق لرحلات البحر. لا يلتصق بالرمل ويمنحني حماية حقيقية طوال اليوم.",
      name: "ليان، مدربة سباحة",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-orange-50/60 via-white to-sky-50 px-6 pb-24 pt-16 text-slate-900 lg:px-16">
      <span className="pointer-events-none absolute -right-36 top-16 h-80 w-80 rounded-full bg-gradient-to-br from-orange-200 via-pink-200/50 to-white blur-3xl" />
      <span className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-gradient-to-br from-sky-200 via-teal-100 to-white blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-sm font-medium text-amber-600 shadow-lg shadow-amber-200/40 ring-1 ring-amber-500/10 backdrop-blur">
            جديد الصيف
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            حماية ذكية للوجه والجسم
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.2] text-slate-900 sm:text-5xl">
            خاخ واقي الشمس SPF 50
            <span className="block text-amber-600">
              درعك اليومي ضد أشعة الشمس القاسية
            </span>
          </h1>
          <p className="text-lg leading-8 text-slate-600 sm:text-xl">
            صياغة متوازنة للهواة والمحترفين معاً: حماية فورية، تغطية متجانسة،
            وترطيب نباتي يدوم 12 ساعة بدون أي بقايا بيضاء. مناسب لكل أنواع
            البشرة وللاستخدام تحت المكياج أو أثناء النشاطات الخارجية.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#order"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-amber-200 transition hover:bg-amber-600 hover:shadow-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              اطلبه الآن
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M5 12h14m0 0-5-5m5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-200 bg-white/70 px-8 py-3 text-base font-semibold text-amber-700 shadow-sm backdrop-blur transition hover:border-amber-300 hover:text-amber-800"
            >
              اكتشف المزايا
            </a>
          </div>

          <div className="grid gap-6 rounded-3xl bg-white/70 p-6 shadow-xl shadow-amber-100/60 ring-1 ring-amber-100 backdrop-blur lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-sm font-semibold text-amber-600">
                  {stat.label}
                </p>
                <p className="text-lg font-bold text-slate-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative h-full max-w-md rounded-[3rem] bg-gradient-to-br from-white/90 via-white to-amber-100/70 p-8 shadow-2xl shadow-amber-200/70 ring-1 ring-white/80 backdrop-blur">
            <div className="absolute -right-6 top-6 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-md">
              SPF 50+
            </div>
            <div className="absolute -left-6 bottom-8 rounded-full bg-sky-500/90 px-4 py-2 text-sm font-semibold text-white shadow-md">
              مقاوم للماء
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="relative h-64 w-64">
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-amber-200 via-white to-sky-100 blur-2xl" />
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="h-full w-24 rounded-full bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 shadow-xl shadow-amber-200">
                    <div className="mx-auto mt-4 h-6 w-16 rounded-full bg-white/70" />
                    <div className="mx-auto mt-3 flex h-24 w-20 flex-col justify-between rounded-full border border-white/50 bg-gradient-to-br from-white to-amber-100/80 p-3 text-center text-xs font-semibold text-amber-700 shadow-inner">
                      <span>FACE</span>
                      <span>&amp;</span>
                      <span>BODY</span>
                    </div>
                    <div className="mx-auto mt-6 h-4 w-14 rounded-full bg-amber-200/80" />
                  </div>
                </div>
              </div>
              <p className="max-w-sm text-center text-sm leading-6 text-slate-600">
                رذاذ بخاخ دقيق بتقنية الضباب الناعم يوزع الجرعة المثالية دون أن
                يسد المسام. غني بمضادات الأكسدة ليمنع ظهور التصبغات.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id="benefits" className="mx-auto mt-20 max-w-6xl space-y-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            لماذا يحب الجميع خاخ واقي الشمس SPF 50؟
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            مزود بتقنية &quot;الدرع النباتي&quot; التي تمزج بين فيتامين E،
            البانثينول، ومركب السيراميد ليمنحك حماية متعددة الوظائف مع إحساس
            فائق الخفة.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group h-full rounded-3xl bg-white/80 p-6 shadow-xl shadow-amber-100/60 ring-1 ring-amber-100 transition hover:-translate-y-1 hover:shadow-amber-200"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-amber-500/10 p-3 text-amber-600">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="order"
        className="mx-auto mt-20 flex max-w-6xl flex-col gap-10 rounded-[2.75rem] bg-gradient-to-br from-amber-500 to-amber-600 px-8 py-12 text-white shadow-2xl shadow-amber-300/70 lg:flex-row lg:items-center lg:px-14"
      >
        <div className="flex-1 space-y-5">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            عرض محدود: احصل على خصم 20٪ مع الطلب الأول
          </h2>
          <ul className="space-y-3 text-base leading-7">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                ✓
              </span>
              توصيل سريع خلال 48 ساعة داخل المملكة.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                ✓
              </span>
              عبوة سفر مجانية سعة 50 مل عند شراء عبوتين.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                ✓
              </span>
              مصمم للبشرة الحساسة وخالٍ من العطور والكحول.
            </li>
          </ul>
        </div>
        <div className="flex-1 rounded-3xl bg-white p-6 text-slate-900 shadow-lg shadow-amber-200">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-sm font-semibold text-amber-600">
                السعر الآن
              </p>
              <p className="text-4xl font-extrabold text-slate-900">159 ر.س</p>
            </div>
            <p className="text-sm font-medium text-slate-500 line-through">
              199 ر.س
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            الدفع عند الاستلام متاح. ضمان استرجاع خلال 14 يوماً إذا لم تحصلي
            على النتائج المتوقعة.
          </p>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="الاسم الكامل"
              className="w-full rounded-full border border-slate-200 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
            />
            <input
              type="tel"
              placeholder="رقم الجوال"
              className="w-full rounded-full border border-slate-200 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
            />
            <input
              type="text"
              placeholder="المدينة"
              className="w-full rounded-full border border-slate-200 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              تأكيد الطلب الآن
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl rounded-[2.75rem] bg-white/70 p-10 shadow-2xl shadow-amber-100/70 ring-1 ring-amber-100 backdrop-blur">
        <h2 className="text-3xl font-bold text-slate-900">طريقة الاستخدام</h2>
        <ol className="mt-8 grid gap-6 text-base leading-7 text-slate-600 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step} className="relative rounded-3xl bg-white/80 p-6">
              <span className="absolute -top-4 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-white shadow-lg">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-20 max-w-6xl space-y-8">
        <h2 className="text-3xl font-bold text-slate-900">
          آراء من جرّبوا واقي الشمس خاخ
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="h-full rounded-3xl bg-white/80 p-8 shadow-xl shadow-amber-100/60 ring-1 ring-amber-100"
            >
              <blockquote className="text-lg leading-8 text-slate-700">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-amber-600">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-24 max-w-6xl border-t border-amber-100 pt-8 text-sm text-slate-500">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} خاخ بيوتي. جميع الحقوق محفوظة.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#order" className="hover:text-amber-600">
              سياسة الاسترجاع
            </a>
            <a href="#order" className="hover:text-amber-600">
              دعم العملاء
            </a>
            <a href="#benefits" className="hover:text-amber-600">
              المكونات
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
