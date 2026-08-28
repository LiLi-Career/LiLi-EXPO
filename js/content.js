"use strict";

const LILI_CONTENT = {

  // ==================== 開催情報 ====================

  event: {
    date: "2026.09.13 SUN",
    time: "11:00–18:00（予定）",
    venue: "セガサミーグループ本社",

    address:
      "〒141-0033 東京都品川区西品川一丁目1-1\n住友不動産大崎ガーデンタワー",

    station:
      "JR線・りんかい線 大崎駅 南口から徒歩6分",

    accessUrl:
      "https://www.segasammy.co.jp/ja/corp/profile/access/",

    capacity:
      "限定200名・定員に達し次第受付終了予定",

    highlights: [
      "大学生・大学院生対象",
      "参加無料",
      "服装自由",
      "1人参加歓迎"
    ]
  },


  // ==================== 参加予約 ====================

  registration: {

    /*
      参加フォームが完成したら、
      下の""の中にURLを入力してください。

      例：
      url: "https://forms.google.com/xxxx",
    */

    url: "",

    buttonText:
      "無料で参加予約する（準備中）",

    note:
      "参加予約フォームは準備が整い次第公開します。"
  },


  // ==================== 友達紹介 ====================

  referral: {
    title:
      "友達紹介でQUOカード500円分プレゼント",

    note:
      "紹介特典の対象条件と受け取り方法は、申込案内でお知らせします。"
  },


  // ==================== 当日出会える人 ====================

  speakers: [
    {
      type: "PROFILE 01",
      initial: "A",
      name: "Aさん",
      role: "所属・現在の役割を掲載",

      career: [
        "入社・最初の配属",
        "転機となった経験",
        "現在の仕事"
      ],

      description:
        "現在の仕事内容や、これまでの経験が今につながった過程を紹介します。",

      talk:
        "就活時の迷いや、入社後に感じたギャップなどをお話しします。"
    },

    {
      type: "PROFILE 02",
      initial: "B",
      name: "Bさん",
      role: "所属・現在の役割を掲載",

      career: [
        "入社・現場経験",
        "新しい役割への挑戦",
        "現在の仕事"
      ],

      description:
        "挑戦のきっかけや、働く中で大切にしてきたことを紹介します。",

      talk:
        "キャリアを選んだ理由や、挑戦するときに考えていたことをお話しします。"
    },

    {
      type: "PROFILE 03",
      initial: "C",
      name: "Cさん",
      role: "所属・現在の役割を掲載",

      career: [
        "入社・担当業務",
        "キャリアの転換点",
        "現在の仕事"
      ],

      description:
        "自分らしい働き方を見つけるまでの道のりを紹介します。",

      talk:
        "仕事のリアルや、学生のうちに知りたかったことをお話しします。"
    }
  ],


  // ==================== 参加企業 ====================

  /*
    会社が増えた場合は、
    同じ形をコピーして追加できます。
  */

  companies: [
    {
      booth: "A-01",
      name: "PwCコンサルティング合同会社",
      industry: "コンサルティング",
      appeal:
        "多様な業界の企業と向き合い、変革や成長を支える仕事",
      url:
        "https://www.pwc.com/jp/ja/about-us/member/consulting.html"
    },

    {
      booth: "A-02",
      name: "パーソルクロステクノロジー株式会社",
      industry: "IT・技術系人材サービス",
      appeal:
        "テクノロジーと人の力をつなぎ、多様なキャリアを支える",
      url:
        "https://persol-xtech.co.jp/"
    },

    {
      booth: "A-03",
      name: "セガサミーホールディングス株式会社",
      industry: "エンタテインメント",
      appeal:
        "ゲームや遊技機など、幅広い事業から感動体験を生み出す",
      url:
        "https://www.segasammy.co.jp/ja/"
    },

    {
      booth: "A-04",
      name: "株式会社ユー・エス・イー",
      industry: "IT・システム",
      appeal:
        "企業の業務やサービスを、システムと技術で支える",
      url:
        "https://www.use-ebisu.co.jp/"
    },

    {
      booth: "A-05",
      name: "株式会社ドコモ CS",
      industry: "通信・インフラ業界",
      appeal:
        "",
      url:
        "https://www.docomo-cs.co.jp/"
    },

    {
      booth: "A-06",
      name: "富士通株式会社",
      industry: "IT・テクノロジー",
      appeal:
        "テクノロジーを通して、企業や社会の課題解決に挑む",
      url:
        "https://global.fujitsu/ja-JP"
    },

    {
      booth: "A-07",
      name: "東京ガスiネット株式会社",
      industry: "IT・エネルギー",
      appeal:
        "『はじめて』をカタチにし、ITを通じてエネルギー事業の今を支え、未来を創る",
      url:
        "https://www.tg-inet.co.jp/"
    },

    {
      booth: "A-08",
      name: "株式会社ダイヤモンド・ビジネス企画",
      industry: "出版・ビジネス",
      appeal:
        "働く人と企業に、新しい視点や価値ある情報を届ける",
      url:
        "https://www.diamond-biz.co.jp/"
    },

    {
      booth: "A-09",
      name: "株式会社東急エージェンシー",
      industry: "広告・マーケティング",
      appeal:
        "広告とコミュニケーションの力で、企業と生活者をつなぎ、新しい価値を生み出す",
      url:
        "https://www.tokyu-agc.co.jp/"
    },

    {
      booth: "A-10",
      name: "参加企業を順次公開",
      industry: "COMING SOON",
      appeal:
        "詳細は決まり次第お知らせします",
      url: ""
    },

    {
      booth: "A-11",
      name: "参加企業を順次公開",
      industry: "COMING SOON",
      appeal:
        "詳細は決まり次第お知らせします",
      url: ""
    },

    {
      booth: "A-12",
      name: "参加企業を順次公開",
      industry: "COMING SOON",
      appeal:
        "詳細は決まり次第お知らせします",
      url: ""
    }
  ],


  // ==================== イベントチラシ ====================

  /*
    チラシ完成後、表面・裏面の画像を
    assetsフォルダへ入れてください。

    そのあと、下の""の中に画像名を入力します。

    例：
    frontImage: "assets/flyer-front.jpg",
    backImage: "assets/flyer-back.jpg",
    pdfUrl: "assets/lili-expo-flyer.pdf"
  */

  flyer: {
    frontImage: "",
    backImage: "",
    pdfUrl: ""
  },


  // ==================== 当日のプログラム ====================

  programs: {

    seminar: {
      description:
        "働き方やキャリアを考えるための視点を、さまざまなテーマから学べます。",

      points: [
        "働き方やキャリアを考えるヒントが得られる",
        "仕事選びの視野を広げられる",
        "セミナーの詳しいテーマは決まり次第公開"
      ]
    },

    roundtable: {
      description:
        "企業で働く社員と少人数で話し、仕事内容や会社のリアルを直接聞けます。",

      points: [
        "少人数で企業の社員と直接話せる",
        "仕事内容や会社の雰囲気を知ることができる",
        "選考では聞きにくいことも自由に質問できる"
      ]
    }
  },


  // ==================== LiLi Career ====================

  about: {
    introduction:
      "LiLi Careerは、キャリアアップしたい女子学生に特化した就活サポートです。一人ひとりに専任のサポーターがつき、企業選びから選考対策までマンツーマンで伴走します。",

    features: [
      {
        number: "01",
        title:
          "女子学生に特化した就活サポートとして日本最大規模！"
      },

      {
        number: "02",
        title:
          "優良大手企業の推薦を中心にご案内が可能！"
      },

      {
        number: "03",
        title:
          "専任のサポーターが担当し、マンツーマンで自己分析・面接対策を実施！"
      }
    ],

    whyWomen:
      "女性だからキャリアを狭めるのではなく、将来の選択肢をもっと自由に広げてほしい。さまざまな企業や社会人との対話を通じて、自分の可能性を決めつけずに考えられる場をつくります。"
  },


  // ==================== 会社概要 ====================

  /*
    正式な会社情報が分かったら変更してください。
  */

  organization: {
    name:
      "運営会社名は確認中",

    service:
      "LiLi Career",

    business:
      "女子学生のキャリア・就職支援",

    website:
      "",

    contact:
      "お問い合わせ先は確認中"
  },


  // ==================== SNS ====================

  /*
    URLが分かったら""の中に入力してください。

    例：
    url: "https://www.instagram.com/アカウント名/",
  */

  socials: [
    {
      label: "X（旧Twitter）",
      url: ""
    },

    {
      label: "Instagram 1",
      url: ""
    },

    {
      label: "Instagram 2",
      url: ""
    },

    {
      label: "TikTok",
      url: ""
    }
  ],


  // ==================== よくある質問 ====================

  faq: [
    {
      question:
        "誰が参加できますか？",

      answer:
        "女性の大学生・大学院生が参加できます。学年を問わず、就活前から就活中まで歓迎します。"
    },

    {
      question:
        "参加費はかかりますか？",

      answer:
        "参加費は無料です。"
    },

    {
      question:
        "定員はありますか？",

      answer:
        "限定200名です。定員に達し次第、受付を終了する場合がありますので、早めの参加予約がおすすめです。"
    },

    {
      question:
        "1人でも参加できますか？",

      answer:
        "はい、1人での参加も歓迎しています。"
    },

    {
      question:
        "服装に指定はありますか？",

      answer:
        "服装は自由です。普段着で気軽にご参加ください。"
    },

    {
      question:
        "就活前でも参加できますか？",

      answer:
        "はい、参加できます。就活を始める前に、働き方や会社の選択肢を広げたい方にもおすすめです。"
    },

    {
      question:
        "途中参加・途中退出はできますか？",

      answer:
        "最終確認後、正式な案内を掲載します。"
    },

    {
      question:
        "友達紹介の特典はありますか？",

      answer:
        "友達紹介でQUOカード500円分をプレゼント予定です。対象条件と受け取り方法は申込案内でお知らせします。"
    },

    {
      question:
        "個別相談会は予約制ですか？",

      answer:
        "予約方法と参加枠は、決まり次第お知らせします。相談内容がまとまっていなくても参加できます。"
    },

    {
      question:
        "企業から選考されるイベントですか？",

      answer:
        "LiLi EXPOは、企業や社会人との対話を通じてキャリアの選択肢を広げるイベントです。企業の選考を目的とした合同説明会ではありません。"
    }
  ]
};