/* Local teaching question bank. Edit scripts/build-content.cjs to regenerate. */
window.GD_DATA = {
  "version": 4,
  "scenes": [
    {
      "id": "portrait",
      "title": "识别客户画像",
      "en": "BREAK THE ICE",
      "task": "礼貌问候并欢迎客户，听辨用车场景与偏好；追问家庭成员或具体用途，初步判断务实家庭型、科技先锋型或商务精英型，注意跨文化礼仪。",
      "rank": "客户洞察达人"
    },
    {
      "id": "recommend",
      "title": "匹配需求与汽车推介",
      "en": "FIND THE RIGHT MATCH",
      "task": "依据接待记录中的客户画像，选择匹配的模拟新能源汽车。针对家庭型介绍空间、续航与性价比；科技型介绍驾驶辅助与车载娱乐；商务型介绍舒适度、高端配置与品牌形象。用清楚的英语说明卖点，并追问尚未明确的适配条件。",
      "rank": "车型推介专家"
    },
    {
      "id": "negotiate",
      "title": "价格谈判与化解顾虑",
      "en": "BUILD TRUST",
      "task": "耐心听清价格、配置或服务异议；礼貌澄清比较依据与保障需求，结合产品价值、售后服务和技术实际价值回应，避免直接冲突与未经证实的承诺，推动继续沟通。",
      "rank": "谈判沟通高手"
    },
    {
      "id": "close",
      "title": "达成购车意向促成成交",
      "en": "MAKE THE NEXT MOVE",
      "task": "总结匹配客户需求的核心优势，再确认购买意愿；说明核对合同、付款安排及提车时间等步骤，用礼貌英语确认具体安排并结束接待。",
      "rank": "销冠能手"
    }
  ],
  "questions": [
    {
      "id": "portrait-narin",
      "scene": 0,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Narin",
        "country": "TH",
        "countryName": "泰国",
        "city": "Bangkok"
      },
      "context": "首次接待：Narin刚进入展厅。先用英语礼貌问候、欢迎并表示愿意了解需求；结合用车场景和偏好推断画像，追问家庭成员或尚不明确的使用条件。不要根据国籍推断消费偏好。",
      "script": "Good morning. Thank you for welcoming me. I live in Bangkok. I commute to work and take my children out on weekends. Safety and rear-seat space matter most to me. I am still comparing electric cars. Could you help me find a suitable option?",
      "translation": "早上好，谢谢您的接待。我住在Bangkok。工作通勤及周末带孩子出行，重视安全和后排空间。我仍在比较电动汽车。您能帮我找到合适的选择吗？",
      "audio": "audio/portrait-narin.wav",
      "facts": [
        {
          "text": "客户住在 Bangkok",
          "evidence": "I live in Bangkok.",
          "correct": true,
          "id": "portrait-narin-f0"
        },
        {
          "text": "工作通勤及周末带孩子出行",
          "evidence": "I commute to work and take my children out on weekends.",
          "correct": true,
          "id": "portrait-narin-f1"
        },
        {
          "text": "重视安全和后排空间",
          "evidence": "Safety and rear-seat space matter most to me.",
          "correct": true,
          "id": "portrait-narin-f2"
        },
        {
          "text": "仍在比较电动汽车",
          "evidence": "I am still comparing electric cars.",
          "correct": true,
          "id": "portrait-narin-f3"
        },
        {
          "text": "客户已明确告知家庭乘坐人数",
          "evidence": "语音未说明通常的乘坐人数。",
          "correct": false,
          "id": "portrait-narin-f4"
        },
        {
          "text": "客户已选定购车车型",
          "evidence": "I am still comparing electric cars.",
          "correct": false,
          "id": "portrait-narin-f5"
        }
      ],
      "topics": [
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Four people, including two children.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "About sixty kilometres each day.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "I have my own parking space, but no charger yet.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around eight hundred thousand baht.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "use",
          "label": "主要用车用途",
          "groups": [
            [
              "car",
              "vehicle",
              "driv"
            ],
            [
              "use",
              "purpose",
              "work",
              "business",
              "commut",
              "trip"
            ]
          ],
          "example": "What will you mainly use the car for?",
          "status": "known",
          "reply": "I commute to work and take my children out on weekends.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Safety and rear-seat space matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About sixty kilometres each day.",
        "passengers": "Four people, including two children.",
        "charging": "I have my own parking space, but no charger yet.",
        "budget": "Around eight hundred thousand baht.",
        "priority": "Safety and rear-seat space matter most to me.",
        "use": "I commute to work and take my children out on weekends.",
        "compare": "A smaller electric hatchback with fewer safety features.",
        "warranty": "I worry about the cost of battery repairs after the warranty ends.",
        "payment": "I prefer a deposit followed by monthly instalments.",
        "delivery": "Before the end of next month.",
        "contract": "I would like the deposit and cancellation terms explained.",
        "contact": "Email is best for me.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "portrait-pim",
      "scene": 0,
      "persona": "科技先锋型",
      "recommendedModel": "Smart E",
      "customer": {
        "name": "Pim",
        "country": "TH",
        "countryName": "泰国",
        "city": "Chiang Mai"
      },
      "context": "首次接待：Pim刚进入展厅。先用英语礼貌问候、欢迎并表示愿意了解需求；结合用车场景和偏好推断画像，追问家庭成员或尚不明确的使用条件。不要根据国籍推断消费偏好。",
      "script": "Good morning. Thank you for welcoming me. I live in Chiang Mai. I drive to my design studio and enjoy trying new technology. Phone connectivity and helpful driving assistance matter most to me. I am still comparing electric cars. Could you help me find a suitable option?",
      "translation": "早上好，谢谢您的接待。我住在Chiang Mai。往返设计工作室并喜欢新技术，重视手机互联和驾驶辅助。我仍在比较电动汽车。您能帮我找到合适的选择吗？",
      "audio": "audio/portrait-pim.wav",
      "facts": [
        {
          "text": "客户住在 Chiang Mai",
          "evidence": "I live in Chiang Mai.",
          "correct": true,
          "id": "portrait-pim-f0"
        },
        {
          "text": "往返设计工作室并喜欢新技术",
          "evidence": "I drive to my design studio and enjoy trying new technology.",
          "correct": true,
          "id": "portrait-pim-f1"
        },
        {
          "text": "重视手机互联和驾驶辅助",
          "evidence": "Phone connectivity and helpful driving assistance matter most to me.",
          "correct": true,
          "id": "portrait-pim-f2"
        },
        {
          "text": "仍在比较电动汽车",
          "evidence": "I am still comparing electric cars.",
          "correct": true,
          "id": "portrait-pim-f3"
        },
        {
          "text": "客户已明确告知家庭乘坐人数",
          "evidence": "语音未说明通常的乘坐人数。",
          "correct": false,
          "id": "portrait-pim-f4"
        },
        {
          "text": "客户已选定购车车型",
          "evidence": "I am still comparing electric cars.",
          "correct": false,
          "id": "portrait-pim-f5"
        }
      ],
      "topics": [
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Usually two adults.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "About thirty kilometres on a normal day.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "My building has shared chargers, but availability changes.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around one million baht.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "use",
          "label": "主要用车用途",
          "groups": [
            [
              "car",
              "vehicle",
              "driv"
            ],
            [
              "use",
              "purpose",
              "work",
              "business",
              "commut",
              "trip"
            ]
          ],
          "example": "What will you mainly use the car for?",
          "status": "known",
          "reply": "I drive to my design studio and enjoy trying new technology.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Phone connectivity and helpful driving assistance matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About thirty kilometres on a normal day.",
        "passengers": "Usually two adults.",
        "charging": "My building has shared chargers, but availability changes.",
        "budget": "Around one million baht.",
        "priority": "Phone connectivity and helpful driving assistance matter most to me.",
        "use": "I drive to my design studio and enjoy trying new technology.",
        "compare": "An electric sedan that includes connected services for a limited time.",
        "warranty": "I want to know which battery faults are covered.",
        "payment": "I would like to compare a full payment with instalments.",
        "delivery": "In about six weeks.",
        "contract": "I need to understand which connected services require a subscription.",
        "contact": "A text message would be convenient.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "portrait-anan",
      "scene": 0,
      "persona": "商务精英型",
      "recommendedModel": "Comfort E",
      "customer": {
        "name": "Anan",
        "country": "TH",
        "countryName": "泰国",
        "city": "Phuket"
      },
      "context": "首次接待：Anan刚进入展厅。先用英语礼貌问候、欢迎并表示愿意了解需求；结合用车场景和偏好推断画像，追问家庭成员或尚不明确的使用条件。不要根据国籍推断消费偏好。",
      "script": "Good morning. Thank you for welcoming me. I live in Phuket. I drive visiting business partners to meetings. A quiet cabin and comfortable seats matter most to me. I am still comparing electric cars. Could you help me find a suitable option?",
      "translation": "早上好，谢谢您的接待。我住在Phuket。接送商务伙伴参加会议，重视安静座舱和舒适座椅。我仍在比较电动汽车。您能帮我找到合适的选择吗？",
      "audio": "audio/portrait-anan.wav",
      "facts": [
        {
          "text": "客户住在 Phuket",
          "evidence": "I live in Phuket.",
          "correct": true,
          "id": "portrait-anan-f0"
        },
        {
          "text": "接送商务伙伴参加会议",
          "evidence": "I drive visiting business partners to meetings.",
          "correct": true,
          "id": "portrait-anan-f1"
        },
        {
          "text": "重视安静座舱和舒适座椅",
          "evidence": "A quiet cabin and comfortable seats matter most to me.",
          "correct": true,
          "id": "portrait-anan-f2"
        },
        {
          "text": "仍在比较电动汽车",
          "evidence": "I am still comparing electric cars.",
          "correct": true,
          "id": "portrait-anan-f3"
        },
        {
          "text": "客户已明确告知家庭乘坐人数",
          "evidence": "语音未说明通常的乘坐人数。",
          "correct": false,
          "id": "portrait-anan-f4"
        },
        {
          "text": "客户已选定购车车型",
          "evidence": "I am still comparing electric cars.",
          "correct": false,
          "id": "portrait-anan-f5"
        }
      ],
      "topics": [
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Usually three adults, including me.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "Around ninety kilometres each day.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "There is a charger at my office, but none at home.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around one and a half million baht.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "use",
          "label": "主要用车用途",
          "groups": [
            [
              "car",
              "vehicle",
              "driv"
            ],
            [
              "use",
              "purpose",
              "work",
              "business",
              "commut",
              "trip"
            ]
          ],
          "example": "What will you mainly use the car for?",
          "status": "known",
          "reply": "I drive visiting business partners to meetings.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "A quiet cabin and comfortable seats matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "Around ninety kilometres each day.",
        "passengers": "Usually three adults, including me.",
        "charging": "There is a charger at my office, but none at home.",
        "budget": "Around one and a half million baht.",
        "priority": "A quiet cabin and comfortable seats matter most to me.",
        "use": "I drive visiting business partners to meetings.",
        "compare": "A larger sedan with a quieter cabin.",
        "warranty": "I am concerned about how long battery repairs could take.",
        "payment": "My company needs an invoice before arranging payment.",
        "delivery": "Before a business visit in three weeks.",
        "contract": "Please explain the company invoice and delivery terms.",
        "contact": "Please call me in the afternoon.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "portrait-mali",
      "scene": 0,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Mali",
        "country": "TH",
        "countryName": "泰国",
        "city": "Khon Kaen"
      },
      "context": "首次接待：Mali刚进入展厅。先用英语礼貌问候、欢迎并表示愿意了解需求；结合用车场景和偏好推断画像，追问家庭成员或尚不明确的使用条件。不要根据国籍推断消费偏好。",
      "script": "Good morning. Thank you for welcoming me. I live in Khon Kaen. I take my parents to appointments and carry supplies for our shop. Easy access and a practical luggage area matter most to me. I am still comparing electric cars. Could you help me find a suitable option?",
      "translation": "早上好，谢谢您的接待。我住在Khon Kaen。接送父母就医并为商店运送物资，重视上下车便利和实用行李空间。我仍在比较电动汽车。您能帮我找到合适的选择吗？",
      "audio": "audio/portrait-mali.wav",
      "facts": [
        {
          "text": "客户住在 Khon Kaen",
          "evidence": "I live in Khon Kaen.",
          "correct": true,
          "id": "portrait-mali-f0"
        },
        {
          "text": "接送父母就医并为商店运送物资",
          "evidence": "I take my parents to appointments and carry supplies for our shop.",
          "correct": true,
          "id": "portrait-mali-f1"
        },
        {
          "text": "重视上下车便利和实用行李空间",
          "evidence": "Easy access and a practical luggage area matter most to me.",
          "correct": true,
          "id": "portrait-mali-f2"
        },
        {
          "text": "仍在比较电动汽车",
          "evidence": "I am still comparing electric cars.",
          "correct": true,
          "id": "portrait-mali-f3"
        },
        {
          "text": "客户已明确告知家庭乘坐人数",
          "evidence": "语音未说明通常的乘坐人数。",
          "correct": false,
          "id": "portrait-mali-f4"
        },
        {
          "text": "客户已选定购车车型",
          "evidence": "I am still comparing electric cars.",
          "correct": false,
          "id": "portrait-mali-f5"
        }
      ],
      "topics": [
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Usually three people, including my parents.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "About forty-five kilometres each day.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "We use street parking, so I need public charging nearby.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around seven hundred thousand baht.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "use",
          "label": "主要用车用途",
          "groups": [
            [
              "car",
              "vehicle",
              "driv"
            ],
            [
              "use",
              "purpose",
              "work",
              "business",
              "commut",
              "trip"
            ]
          ],
          "example": "What will you mainly use the car for?",
          "status": "known",
          "reply": "I take my parents to appointments and carry supplies for our shop.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Easy access and a practical luggage area matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About forty-five kilometres each day.",
        "passengers": "Usually three people, including my parents.",
        "charging": "We use street parking, so I need public charging nearby.",
        "budget": "Around seven hundred thousand baht.",
        "priority": "Easy access and a practical luggage area matter most to me.",
        "use": "I take my parents to appointments and carry supplies for our shop.",
        "compare": "A used electric car with a shorter warranty.",
        "warranty": "I worry about battery health when I keep the car for many years.",
        "payment": "I prefer to pay in full if the total cost is clear.",
        "delivery": "Within two months.",
        "contract": "I would like a clear list of all fees.",
        "contact": "Please send me a message first.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "portrait-aina",
      "scene": 0,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Aina",
        "country": "MY",
        "countryName": "马来西亚",
        "city": "Kuala Lumpur"
      },
      "context": "首次接待：Aina刚进入展厅。先用英语礼貌问候、欢迎并表示愿意了解需求；结合用车场景和偏好推断画像，追问家庭成员或尚不明确的使用条件。不要根据国籍推断消费偏好。",
      "script": "Good morning. Thank you for welcoming me. I live in Kuala Lumpur. I drive to work and visit my parents outside the city. Useful range and enough room for family luggage matter most to me. I am still comparing electric cars. Could you help me find a suitable option?",
      "translation": "早上好，谢谢您的接待。我住在Kuala Lumpur。工作通勤并到城外探望父母，重视实用续航和家庭行李空间。我仍在比较电动汽车。您能帮我找到合适的选择吗？",
      "audio": "audio/portrait-aina.wav",
      "facts": [
        {
          "text": "客户住在 Kuala Lumpur",
          "evidence": "I live in Kuala Lumpur.",
          "correct": true,
          "id": "portrait-aina-f0"
        },
        {
          "text": "工作通勤并到城外探望父母",
          "evidence": "I drive to work and visit my parents outside the city.",
          "correct": true,
          "id": "portrait-aina-f1"
        },
        {
          "text": "重视实用续航和家庭行李空间",
          "evidence": "Useful range and enough room for family luggage matter most to me.",
          "correct": true,
          "id": "portrait-aina-f2"
        },
        {
          "text": "仍在比较电动汽车",
          "evidence": "I am still comparing electric cars.",
          "correct": true,
          "id": "portrait-aina-f3"
        },
        {
          "text": "客户已明确告知家庭乘坐人数",
          "evidence": "语音未说明通常的乘坐人数。",
          "correct": false,
          "id": "portrait-aina-f4"
        },
        {
          "text": "客户已选定购车车型",
          "evidence": "I am still comparing electric cars.",
          "correct": false,
          "id": "portrait-aina-f5"
        }
      ],
      "topics": [
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Five family members on weekend trips.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "About seventy kilometres each weekday.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "I can install a charger in my garage after getting approval.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around one hundred and twenty thousand ringgit.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "use",
          "label": "主要用车用途",
          "groups": [
            [
              "car",
              "vehicle",
              "driv"
            ],
            [
              "use",
              "purpose",
              "work",
              "business",
              "commut",
              "trip"
            ]
          ],
          "example": "What will you mainly use the car for?",
          "status": "known",
          "reply": "I drive to work and visit my parents outside the city.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Useful range and enough room for family luggage matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About seventy kilometres each weekday.",
        "passengers": "Five family members on weekend trips.",
        "charging": "I can install a charger in my garage after getting approval.",
        "budget": "Around one hundred and twenty thousand ringgit.",
        "priority": "Useful range and enough room for family luggage matter most to me.",
        "use": "I drive to work and visit my parents outside the city.",
        "compare": "A hybrid with a lower starting price.",
        "warranty": "I want to understand the battery warranty mileage limit.",
        "payment": "I would like monthly instalments with a manageable deposit.",
        "delivery": "Before our holiday in two months.",
        "contract": "Please explain the finance conditions.",
        "contact": "Email would help me keep a written record.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "portrait-budi",
      "scene": 0,
      "persona": "科技先锋型",
      "recommendedModel": "Smart E",
      "customer": {
        "name": "Budi",
        "country": "ID",
        "countryName": "印度尼西亚",
        "city": "Jakarta"
      },
      "context": "首次接待：Budi刚进入展厅。先用英语礼貌问候、欢迎并表示愿意了解需求；结合用车场景和偏好推断画像，追问家庭成员或尚不明确的使用条件。不要根据国籍推断消费偏好。",
      "script": "Good morning. Thank you for welcoming me. I live in Jakarta. I commute across the city and enjoy connected devices. Clear navigation and reliable phone integration matter most to me. I am still comparing electric cars. Could you help me find a suitable option?",
      "translation": "早上好，谢谢您的接待。我住在Jakarta。跨城内通勤并喜欢互联设备，重视清晰导航和可靠的手机互联。我仍在比较电动汽车。您能帮我找到合适的选择吗？",
      "audio": "audio/portrait-budi.wav",
      "facts": [
        {
          "text": "客户住在 Jakarta",
          "evidence": "I live in Jakarta.",
          "correct": true,
          "id": "portrait-budi-f0"
        },
        {
          "text": "跨城内通勤并喜欢互联设备",
          "evidence": "I commute across the city and enjoy connected devices.",
          "correct": true,
          "id": "portrait-budi-f1"
        },
        {
          "text": "重视清晰导航和可靠的手机互联",
          "evidence": "Clear navigation and reliable phone integration matter most to me.",
          "correct": true,
          "id": "portrait-budi-f2"
        },
        {
          "text": "仍在比较电动汽车",
          "evidence": "I am still comparing electric cars.",
          "correct": true,
          "id": "portrait-budi-f3"
        },
        {
          "text": "客户已明确告知家庭乘坐人数",
          "evidence": "语音未说明通常的乘坐人数。",
          "correct": false,
          "id": "portrait-budi-f4"
        },
        {
          "text": "客户已选定购车车型",
          "evidence": "I am still comparing electric cars.",
          "correct": false,
          "id": "portrait-budi-f5"
        }
      ],
      "topics": [
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Usually one person, sometimes two.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "About eighty kilometres per day.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "My office has chargers that staff can book.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around five hundred million rupiah.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "use",
          "label": "主要用车用途",
          "groups": [
            [
              "car",
              "vehicle",
              "driv"
            ],
            [
              "use",
              "purpose",
              "work",
              "business",
              "commut",
              "trip"
            ]
          ],
          "example": "What will you mainly use the car for?",
          "status": "known",
          "reply": "I commute across the city and enjoy connected devices.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Clear navigation and reliable phone integration matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About eighty kilometres per day.",
        "passengers": "Usually one person, sometimes two.",
        "charging": "My office has chargers that staff can book.",
        "budget": "Around five hundred million rupiah.",
        "priority": "Clear navigation and reliable phone integration matter most to me.",
        "use": "I commute across the city and enjoy connected devices.",
        "compare": "An electric car with a larger screen but different software.",
        "warranty": "I want to know how software updates relate to battery protection.",
        "payment": "I would like to understand the deposit first.",
        "delivery": "Next month, after my current lease ends.",
        "contract": "Please explain what is included in the software package.",
        "contact": "A message during my lunch break is best.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "portrait-linh",
      "scene": 0,
      "persona": "商务精英型",
      "recommendedModel": "Comfort E",
      "customer": {
        "name": "Linh",
        "country": "VN",
        "countryName": "越南",
        "city": "Da Nang"
      },
      "context": "首次接待：Linh刚进入展厅。先用英语礼貌问候、欢迎并表示愿意了解需求；结合用车场景和偏好推断画像，追问家庭成员或尚不明确的使用条件。不要根据国籍推断消费偏好。",
      "script": "Good morning. Thank you for welcoming me. I live in Da Nang. I visit clients and sometimes travel between cities. Comfort on long journeys and a professional appearance matter most to me. I am still comparing electric cars. Could you help me find a suitable option?",
      "translation": "早上好，谢谢您的接待。我住在Da Nang。拜访客户并有跨城市出行，重视长途舒适性和专业形象。我仍在比较电动汽车。您能帮我找到合适的选择吗？",
      "audio": "audio/portrait-linh.wav",
      "facts": [
        {
          "text": "客户住在 Da Nang",
          "evidence": "I live in Da Nang.",
          "correct": true,
          "id": "portrait-linh-f0"
        },
        {
          "text": "拜访客户并有跨城市出行",
          "evidence": "I visit clients and sometimes travel between cities.",
          "correct": true,
          "id": "portrait-linh-f1"
        },
        {
          "text": "重视长途舒适性和专业形象",
          "evidence": "Comfort on long journeys and a professional appearance matter most to me.",
          "correct": true,
          "id": "portrait-linh-f2"
        },
        {
          "text": "仍在比较电动汽车",
          "evidence": "I am still comparing electric cars.",
          "correct": true,
          "id": "portrait-linh-f3"
        },
        {
          "text": "客户已明确告知家庭乘坐人数",
          "evidence": "语音未说明通常的乘坐人数。",
          "correct": false,
          "id": "portrait-linh-f4"
        },
        {
          "text": "客户已选定购车车型",
          "evidence": "I am still comparing electric cars.",
          "correct": false,
          "id": "portrait-linh-f5"
        }
      ],
      "topics": [
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Usually two or three adults.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "Around one hundred kilometres on working days.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "There is no home charger, but a public station is near my office.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around nine hundred million dong.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "use",
          "label": "主要用车用途",
          "groups": [
            [
              "car",
              "vehicle",
              "driv"
            ],
            [
              "use",
              "purpose",
              "work",
              "business",
              "commut",
              "trip"
            ]
          ],
          "example": "What will you mainly use the car for?",
          "status": "known",
          "reply": "I visit clients and sometimes travel between cities.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Comfort on long journeys and a professional appearance matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "Around one hundred kilometres on working days.",
        "passengers": "Usually two or three adults.",
        "charging": "There is no home charger, but a public station is near my office.",
        "budget": "Around nine hundred million dong.",
        "priority": "Comfort on long journeys and a professional appearance matter most to me.",
        "use": "I visit clients and sometimes travel between cities.",
        "compare": "A sedan with a lower price but less equipment.",
        "warranty": "I am worried about finding an authorised repair centre when travelling.",
        "payment": "I am considering a company purchase with full payment.",
        "delivery": "Within six weeks.",
        "contract": "I need the service coverage and delivery conditions explained.",
        "contact": "Please email the details before calling.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "portrait-miguel",
      "scene": 0,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Miguel",
        "country": "PH",
        "countryName": "菲律宾",
        "city": "Cebu"
      },
      "context": "首次接待：Miguel刚进入展厅。先用英语礼貌问候、欢迎并表示愿意了解需求；结合用车场景和偏好推断画像，追问家庭成员或尚不明确的使用条件。不要根据国籍推断消费偏好。",
      "script": "Good morning. Thank you for welcoming me. I live in Cebu. I take my children to school and make deliveries for my small business. Low running costs and flexible storage space matter most to me. I am still comparing electric cars. Could you help me find a suitable option?",
      "translation": "早上好，谢谢您的接待。我住在Cebu。接送孩子上学并为小生意送货，重视低使用成本和灵活储物空间。我仍在比较电动汽车。您能帮我找到合适的选择吗？",
      "audio": "audio/portrait-miguel.wav",
      "facts": [
        {
          "text": "客户住在 Cebu",
          "evidence": "I live in Cebu.",
          "correct": true,
          "id": "portrait-miguel-f0"
        },
        {
          "text": "接送孩子上学并为小生意送货",
          "evidence": "I take my children to school and make deliveries for my small business.",
          "correct": true,
          "id": "portrait-miguel-f1"
        },
        {
          "text": "重视低使用成本和灵活储物空间",
          "evidence": "Low running costs and flexible storage space matter most to me.",
          "correct": true,
          "id": "portrait-miguel-f2"
        },
        {
          "text": "仍在比较电动汽车",
          "evidence": "I am still comparing electric cars.",
          "correct": true,
          "id": "portrait-miguel-f3"
        },
        {
          "text": "客户已明确告知家庭乘坐人数",
          "evidence": "语音未说明通常的乘坐人数。",
          "correct": false,
          "id": "portrait-miguel-f4"
        },
        {
          "text": "客户已选定购车车型",
          "evidence": "I am still comparing electric cars.",
          "correct": false,
          "id": "portrait-miguel-f5"
        }
      ],
      "topics": [
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Four people when I travel with my family.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "About fifty-five kilometres each day.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "I have a parking space and need advice on safe charger installation.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around one and a half million pesos.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "use",
          "label": "主要用车用途",
          "groups": [
            [
              "car",
              "vehicle",
              "driv"
            ],
            [
              "use",
              "purpose",
              "work",
              "business",
              "commut",
              "trip"
            ]
          ],
          "example": "What will you mainly use the car for?",
          "status": "known",
          "reply": "I take my children to school and make deliveries for my small business.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Low running costs and flexible storage space matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About fifty-five kilometres each day.",
        "passengers": "Four people when I travel with my family.",
        "charging": "I have a parking space and need advice on safe charger installation.",
        "budget": "Around one and a half million pesos.",
        "priority": "Low running costs and flexible storage space matter most to me.",
        "use": "I take my children to school and make deliveries for my small business.",
        "compare": "A petrol vehicle with more storage but higher fuel costs.",
        "warranty": "I want to understand which maintenance requirements affect the warranty.",
        "payment": "I prefer instalments, depending on the final monthly amount.",
        "delivery": "Before school starts in five weeks.",
        "contract": "Please explain the payment schedule and required documents.",
        "contact": "A phone call in the early evening is best.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "recommend-narin",
      "scene": 1,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Narin",
        "country": "TH",
        "countryName": "泰国",
        "city": "Bangkok"
      },
      "context": "前序接待记录：务实家庭型。可选教学模拟车型：Family E（空间、实用续航与性价比）、Smart E（驾驶辅助、互联与娱乐）、Comfort E（舒适座舱、高端配置与商务形象）。请据画像选择车型，用易懂英语介绍卖点，再追问适配条件；没有给出的具体参数不要自行承诺。",
      "script": "Thank you for listening to my needs. I commute to work and take my children out on weekends. Safety and rear-seat space matter most to me. For my next electric car, I want you to recommend a model that fits space, daily range and total ownership cost. I would appreciate a clear explanation of its practical benefits. I have not arranged a test drive.",
      "translation": "谢谢您倾听我的需求。工作通勤及周末带孩子出行，重视安全和后排空间。对于下一辆电动汽车，我希望您推荐一款符合灵活空间、实用续航和综合性价比需求的车型，并清楚说明实际益处。我尚未安排试驾。",
      "audio": "audio/recommend-narin.wav",
      "facts": [
        {
          "text": "工作通勤及周末带孩子出行",
          "evidence": "I commute to work and take my children out on weekends.",
          "correct": true,
          "id": "recommend-narin-f0"
        },
        {
          "text": "重视安全和后排空间",
          "evidence": "Safety and rear-seat space matter most to me.",
          "correct": true,
          "id": "recommend-narin-f1"
        },
        {
          "text": "希望得到匹配需求的车型推荐",
          "evidence": "I want you to recommend a model that fits space, daily range and total ownership cost.",
          "correct": true,
          "id": "recommend-narin-f2"
        },
        {
          "text": "尚未安排试驾",
          "evidence": "I have not arranged a test drive.",
          "correct": true,
          "id": "recommend-narin-f3"
        },
        {
          "text": "客户已说明全部日常使用细节",
          "evidence": "语音未说明全部日常使用细节。",
          "correct": false,
          "id": "recommend-narin-f4"
        },
        {
          "text": "客户已确认某车型的具体续航和价格",
          "evidence": "语音未确认任何具体车型参数或价格。",
          "correct": false,
          "id": "recommend-narin-f5"
        }
      ],
      "topics": [
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "About sixty kilometres each day.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Four people, including two children.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "I have my own parking space, but no charger yet.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around eight hundred thousand baht.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "testdrive",
          "label": "试驾体验重点",
          "groups": [
            [
              "test drive",
              "drive",
              "try"
            ],
            [
              "feature",
              "check",
              "experience",
              "focus",
              "like",
              "want"
            ]
          ],
          "example": "Which features would you like to experience on a test drive?",
          "status": "open",
          "reply": "I would like to experience the features that matter to my daily use.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Safety and rear-seat space matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About sixty kilometres each day.",
        "passengers": "Four people, including two children.",
        "charging": "I have my own parking space, but no charger yet.",
        "budget": "Around eight hundred thousand baht.",
        "priority": "Safety and rear-seat space matter most to me.",
        "use": "I commute to work and take my children out on weekends.",
        "compare": "A smaller electric hatchback with fewer safety features.",
        "warranty": "I worry about the cost of battery repairs after the warranty ends.",
        "payment": "I prefer a deposit followed by monthly instalments.",
        "delivery": "Before the end of next month.",
        "contract": "I would like the deposit and cancellation terms explained.",
        "contact": "Email is best for me.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "recommend-pim",
      "scene": 1,
      "persona": "科技先锋型",
      "recommendedModel": "Smart E",
      "customer": {
        "name": "Pim",
        "country": "TH",
        "countryName": "泰国",
        "city": "Chiang Mai"
      },
      "context": "前序接待记录：科技先锋型。可选教学模拟车型：Family E（空间、实用续航与性价比）、Smart E（驾驶辅助、互联与娱乐）、Comfort E（舒适座舱、高端配置与商务形象）。请据画像选择车型，用易懂英语介绍卖点，再追问适配条件；没有给出的具体参数不要自行承诺。",
      "script": "Thank you for listening to my needs. I drive to my design studio and enjoy trying new technology. Phone connectivity and helpful driving assistance matter most to me. For my next electric car, I want you to recommend a model that fits driving assistance and in-car entertainment. I would appreciate a clear explanation of its practical benefits. I have not arranged a test drive.",
      "translation": "谢谢您倾听我的需求。往返设计工作室并喜欢新技术，重视手机互联和驾驶辅助。对于下一辆电动汽车，我希望您推荐一款符合驾驶辅助、智能互联和车载娱乐需求的车型，并清楚说明实际益处。我尚未安排试驾。",
      "audio": "audio/recommend-pim.wav",
      "facts": [
        {
          "text": "往返设计工作室并喜欢新技术",
          "evidence": "I drive to my design studio and enjoy trying new technology.",
          "correct": true,
          "id": "recommend-pim-f0"
        },
        {
          "text": "重视手机互联和驾驶辅助",
          "evidence": "Phone connectivity and helpful driving assistance matter most to me.",
          "correct": true,
          "id": "recommend-pim-f1"
        },
        {
          "text": "希望得到匹配需求的车型推荐",
          "evidence": "I want you to recommend a model that fits driving assistance and in-car entertainment.",
          "correct": true,
          "id": "recommend-pim-f2"
        },
        {
          "text": "尚未安排试驾",
          "evidence": "I have not arranged a test drive.",
          "correct": true,
          "id": "recommend-pim-f3"
        },
        {
          "text": "客户已说明全部日常使用细节",
          "evidence": "语音未说明全部日常使用细节。",
          "correct": false,
          "id": "recommend-pim-f4"
        },
        {
          "text": "客户已确认某车型的具体续航和价格",
          "evidence": "语音未确认任何具体车型参数或价格。",
          "correct": false,
          "id": "recommend-pim-f5"
        }
      ],
      "topics": [
        {
          "id": "assist",
          "label": "驾驶辅助使用需求",
          "groups": [
            [
              "driving assistance",
              "driver assistance",
              "assist"
            ],
            [
              "feature",
              "important",
              "use",
              "prefer",
              "need"
            ]
          ],
          "example": "Which driving assistance features are most important to you?",
          "status": "open",
          "reply": "I would like help with parking and safer driving on busy roads.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "entertainment",
          "label": "车载娱乐偏好",
          "groups": [
            [
              "entertainment",
              "music",
              "screen",
              "media"
            ],
            [
              "feature",
              "prefer",
              "use",
              "important",
              "want"
            ]
          ],
          "example": "Which in-car entertainment features would you prefer?",
          "status": "open",
          "reply": "I would like clear navigation, music and phone integration.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "My building has shared chargers, but availability changes.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "testdrive",
          "label": "试驾体验重点",
          "groups": [
            [
              "test drive",
              "drive",
              "try"
            ],
            [
              "feature",
              "check",
              "experience",
              "focus",
              "like",
              "want"
            ]
          ],
          "example": "Which features would you like to experience on a test drive?",
          "status": "open",
          "reply": "I would like to experience the features that matter to my daily use.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around one million baht.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Phone connectivity and helpful driving assistance matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About thirty kilometres on a normal day.",
        "passengers": "Usually two adults.",
        "charging": "My building has shared chargers, but availability changes.",
        "budget": "Around one million baht.",
        "priority": "Phone connectivity and helpful driving assistance matter most to me.",
        "use": "I drive to my design studio and enjoy trying new technology.",
        "compare": "An electric sedan that includes connected services for a limited time.",
        "warranty": "I want to know which battery faults are covered.",
        "payment": "I would like to compare a full payment with instalments.",
        "delivery": "In about six weeks.",
        "contract": "I need to understand which connected services require a subscription.",
        "contact": "A text message would be convenient.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "recommend-anan",
      "scene": 1,
      "persona": "商务精英型",
      "recommendedModel": "Comfort E",
      "customer": {
        "name": "Anan",
        "country": "TH",
        "countryName": "泰国",
        "city": "Phuket"
      },
      "context": "前序接待记录：商务精英型。可选教学模拟车型：Family E（空间、实用续航与性价比）、Smart E（驾驶辅助、互联与娱乐）、Comfort E（舒适座舱、高端配置与商务形象）。请据画像选择车型，用易懂英语介绍卖点，再追问适配条件；没有给出的具体参数不要自行承诺。",
      "script": "Thank you for listening to my needs. I drive visiting business partners to meetings. A quiet cabin and comfortable seats matter most to me. For my next electric car, I want you to recommend a model that fits comfort, premium equipment and professional image. I would appreciate a clear explanation of its practical benefits. I have not arranged a test drive.",
      "translation": "谢谢您倾听我的需求。接送商务伙伴参加会议，重视安静座舱和舒适座椅。对于下一辆电动汽车，我希望您推荐一款符合安静座舱、高端座椅和专业形象需求的车型，并清楚说明实际益处。我尚未安排试驾。",
      "audio": "audio/recommend-anan.wav",
      "facts": [
        {
          "text": "接送商务伙伴参加会议",
          "evidence": "I drive visiting business partners to meetings.",
          "correct": true,
          "id": "recommend-anan-f0"
        },
        {
          "text": "重视安静座舱和舒适座椅",
          "evidence": "A quiet cabin and comfortable seats matter most to me.",
          "correct": true,
          "id": "recommend-anan-f1"
        },
        {
          "text": "希望得到匹配需求的车型推荐",
          "evidence": "I want you to recommend a model that fits comfort, premium equipment and professional image.",
          "correct": true,
          "id": "recommend-anan-f2"
        },
        {
          "text": "尚未安排试驾",
          "evidence": "I have not arranged a test drive.",
          "correct": true,
          "id": "recommend-anan-f3"
        },
        {
          "text": "客户已说明全部日常使用细节",
          "evidence": "语音未说明全部日常使用细节。",
          "correct": false,
          "id": "recommend-anan-f4"
        },
        {
          "text": "客户已确认某车型的具体续航和价格",
          "evidence": "语音未确认任何具体车型参数或价格。",
          "correct": false,
          "id": "recommend-anan-f5"
        }
      ],
      "topics": [
        {
          "id": "comfort",
          "label": "长途舒适需求",
          "groups": [
            [
              "comfort",
              "seat",
              "cabin"
            ],
            [
              "important",
              "need",
              "prefer",
              "journey",
              "travel"
            ]
          ],
          "example": "Which comfort features matter most on your long journeys?",
          "status": "open",
          "reply": "I value quiet travel and supportive seats on longer journeys.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Usually three adults, including me.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "Around ninety kilometres each day.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "testdrive",
          "label": "试驾体验重点",
          "groups": [
            [
              "test drive",
              "drive",
              "try"
            ],
            [
              "feature",
              "check",
              "experience",
              "focus",
              "like",
              "want"
            ]
          ],
          "example": "Which features would you like to experience on a test drive?",
          "status": "open",
          "reply": "I would like to experience the features that matter to my daily use.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around one and a half million baht.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "A quiet cabin and comfortable seats matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "Around ninety kilometres each day.",
        "passengers": "Usually three adults, including me.",
        "charging": "There is a charger at my office, but none at home.",
        "budget": "Around one and a half million baht.",
        "priority": "A quiet cabin and comfortable seats matter most to me.",
        "use": "I drive visiting business partners to meetings.",
        "compare": "A larger sedan with a quieter cabin.",
        "warranty": "I am concerned about how long battery repairs could take.",
        "payment": "My company needs an invoice before arranging payment.",
        "delivery": "Before a business visit in three weeks.",
        "contract": "Please explain the company invoice and delivery terms.",
        "contact": "Please call me in the afternoon.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "recommend-mali",
      "scene": 1,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Mali",
        "country": "TH",
        "countryName": "泰国",
        "city": "Khon Kaen"
      },
      "context": "前序接待记录：务实家庭型。可选教学模拟车型：Family E（空间、实用续航与性价比）、Smart E（驾驶辅助、互联与娱乐）、Comfort E（舒适座舱、高端配置与商务形象）。请据画像选择车型，用易懂英语介绍卖点，再追问适配条件；没有给出的具体参数不要自行承诺。",
      "script": "Thank you for listening to my needs. I take my parents to appointments and carry supplies for our shop. Easy access and a practical luggage area matter most to me. For my next electric car, I want you to recommend a model that fits space, daily range and total ownership cost. I would appreciate a clear explanation of its practical benefits. I have not arranged a test drive.",
      "translation": "谢谢您倾听我的需求。接送父母就医并为商店运送物资，重视上下车便利和实用行李空间。对于下一辆电动汽车，我希望您推荐一款符合灵活空间、实用续航和综合性价比需求的车型，并清楚说明实际益处。我尚未安排试驾。",
      "audio": "audio/recommend-mali.wav",
      "facts": [
        {
          "text": "接送父母就医并为商店运送物资",
          "evidence": "I take my parents to appointments and carry supplies for our shop.",
          "correct": true,
          "id": "recommend-mali-f0"
        },
        {
          "text": "重视上下车便利和实用行李空间",
          "evidence": "Easy access and a practical luggage area matter most to me.",
          "correct": true,
          "id": "recommend-mali-f1"
        },
        {
          "text": "希望得到匹配需求的车型推荐",
          "evidence": "I want you to recommend a model that fits space, daily range and total ownership cost.",
          "correct": true,
          "id": "recommend-mali-f2"
        },
        {
          "text": "尚未安排试驾",
          "evidence": "I have not arranged a test drive.",
          "correct": true,
          "id": "recommend-mali-f3"
        },
        {
          "text": "客户已说明全部日常使用细节",
          "evidence": "语音未说明全部日常使用细节。",
          "correct": false,
          "id": "recommend-mali-f4"
        },
        {
          "text": "客户已确认某车型的具体续航和价格",
          "evidence": "语音未确认任何具体车型参数或价格。",
          "correct": false,
          "id": "recommend-mali-f5"
        }
      ],
      "topics": [
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "About forty-five kilometres each day.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Usually three people, including my parents.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "We use street parking, so I need public charging nearby.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around seven hundred thousand baht.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "testdrive",
          "label": "试驾体验重点",
          "groups": [
            [
              "test drive",
              "drive",
              "try"
            ],
            [
              "feature",
              "check",
              "experience",
              "focus",
              "like",
              "want"
            ]
          ],
          "example": "Which features would you like to experience on a test drive?",
          "status": "open",
          "reply": "I would like to experience the features that matter to my daily use.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Easy access and a practical luggage area matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About forty-five kilometres each day.",
        "passengers": "Usually three people, including my parents.",
        "charging": "We use street parking, so I need public charging nearby.",
        "budget": "Around seven hundred thousand baht.",
        "priority": "Easy access and a practical luggage area matter most to me.",
        "use": "I take my parents to appointments and carry supplies for our shop.",
        "compare": "A used electric car with a shorter warranty.",
        "warranty": "I worry about battery health when I keep the car for many years.",
        "payment": "I prefer to pay in full if the total cost is clear.",
        "delivery": "Within two months.",
        "contract": "I would like a clear list of all fees.",
        "contact": "Please send me a message first.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "recommend-aina",
      "scene": 1,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Aina",
        "country": "MY",
        "countryName": "马来西亚",
        "city": "Kuala Lumpur"
      },
      "context": "前序接待记录：务实家庭型。可选教学模拟车型：Family E（空间、实用续航与性价比）、Smart E（驾驶辅助、互联与娱乐）、Comfort E（舒适座舱、高端配置与商务形象）。请据画像选择车型，用易懂英语介绍卖点，再追问适配条件；没有给出的具体参数不要自行承诺。",
      "script": "Thank you for listening to my needs. I drive to work and visit my parents outside the city. Useful range and enough room for family luggage matter most to me. For my next electric car, I want you to recommend a model that fits space, daily range and total ownership cost. I would appreciate a clear explanation of its practical benefits. I have not arranged a test drive.",
      "translation": "谢谢您倾听我的需求。工作通勤并到城外探望父母，重视实用续航和家庭行李空间。对于下一辆电动汽车，我希望您推荐一款符合灵活空间、实用续航和综合性价比需求的车型，并清楚说明实际益处。我尚未安排试驾。",
      "audio": "audio/recommend-aina.wav",
      "facts": [
        {
          "text": "工作通勤并到城外探望父母",
          "evidence": "I drive to work and visit my parents outside the city.",
          "correct": true,
          "id": "recommend-aina-f0"
        },
        {
          "text": "重视实用续航和家庭行李空间",
          "evidence": "Useful range and enough room for family luggage matter most to me.",
          "correct": true,
          "id": "recommend-aina-f1"
        },
        {
          "text": "希望得到匹配需求的车型推荐",
          "evidence": "I want you to recommend a model that fits space, daily range and total ownership cost.",
          "correct": true,
          "id": "recommend-aina-f2"
        },
        {
          "text": "尚未安排试驾",
          "evidence": "I have not arranged a test drive.",
          "correct": true,
          "id": "recommend-aina-f3"
        },
        {
          "text": "客户已说明全部日常使用细节",
          "evidence": "语音未说明全部日常使用细节。",
          "correct": false,
          "id": "recommend-aina-f4"
        },
        {
          "text": "客户已确认某车型的具体续航和价格",
          "evidence": "语音未确认任何具体车型参数或价格。",
          "correct": false,
          "id": "recommend-aina-f5"
        }
      ],
      "topics": [
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "About seventy kilometres each weekday.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Five family members on weekend trips.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "I can install a charger in my garage after getting approval.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around one hundred and twenty thousand ringgit.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "testdrive",
          "label": "试驾体验重点",
          "groups": [
            [
              "test drive",
              "drive",
              "try"
            ],
            [
              "feature",
              "check",
              "experience",
              "focus",
              "like",
              "want"
            ]
          ],
          "example": "Which features would you like to experience on a test drive?",
          "status": "open",
          "reply": "I would like to experience the features that matter to my daily use.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Useful range and enough room for family luggage matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About seventy kilometres each weekday.",
        "passengers": "Five family members on weekend trips.",
        "charging": "I can install a charger in my garage after getting approval.",
        "budget": "Around one hundred and twenty thousand ringgit.",
        "priority": "Useful range and enough room for family luggage matter most to me.",
        "use": "I drive to work and visit my parents outside the city.",
        "compare": "A hybrid with a lower starting price.",
        "warranty": "I want to understand the battery warranty mileage limit.",
        "payment": "I would like monthly instalments with a manageable deposit.",
        "delivery": "Before our holiday in two months.",
        "contract": "Please explain the finance conditions.",
        "contact": "Email would help me keep a written record.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "recommend-budi",
      "scene": 1,
      "persona": "科技先锋型",
      "recommendedModel": "Smart E",
      "customer": {
        "name": "Budi",
        "country": "ID",
        "countryName": "印度尼西亚",
        "city": "Jakarta"
      },
      "context": "前序接待记录：科技先锋型。可选教学模拟车型：Family E（空间、实用续航与性价比）、Smart E（驾驶辅助、互联与娱乐）、Comfort E（舒适座舱、高端配置与商务形象）。请据画像选择车型，用易懂英语介绍卖点，再追问适配条件；没有给出的具体参数不要自行承诺。",
      "script": "Thank you for listening to my needs. I commute across the city and enjoy connected devices. Clear navigation and reliable phone integration matter most to me. For my next electric car, I want you to recommend a model that fits driving assistance and in-car entertainment. I would appreciate a clear explanation of its practical benefits. I have not arranged a test drive.",
      "translation": "谢谢您倾听我的需求。跨城内通勤并喜欢互联设备，重视清晰导航和可靠的手机互联。对于下一辆电动汽车，我希望您推荐一款符合驾驶辅助、智能互联和车载娱乐需求的车型，并清楚说明实际益处。我尚未安排试驾。",
      "audio": "audio/recommend-budi.wav",
      "facts": [
        {
          "text": "跨城内通勤并喜欢互联设备",
          "evidence": "I commute across the city and enjoy connected devices.",
          "correct": true,
          "id": "recommend-budi-f0"
        },
        {
          "text": "重视清晰导航和可靠的手机互联",
          "evidence": "Clear navigation and reliable phone integration matter most to me.",
          "correct": true,
          "id": "recommend-budi-f1"
        },
        {
          "text": "希望得到匹配需求的车型推荐",
          "evidence": "I want you to recommend a model that fits driving assistance and in-car entertainment.",
          "correct": true,
          "id": "recommend-budi-f2"
        },
        {
          "text": "尚未安排试驾",
          "evidence": "I have not arranged a test drive.",
          "correct": true,
          "id": "recommend-budi-f3"
        },
        {
          "text": "客户已说明全部日常使用细节",
          "evidence": "语音未说明全部日常使用细节。",
          "correct": false,
          "id": "recommend-budi-f4"
        },
        {
          "text": "客户已确认某车型的具体续航和价格",
          "evidence": "语音未确认任何具体车型参数或价格。",
          "correct": false,
          "id": "recommend-budi-f5"
        }
      ],
      "topics": [
        {
          "id": "assist",
          "label": "驾驶辅助使用需求",
          "groups": [
            [
              "driving assistance",
              "driver assistance",
              "assist"
            ],
            [
              "feature",
              "important",
              "use",
              "prefer",
              "need"
            ]
          ],
          "example": "Which driving assistance features are most important to you?",
          "status": "open",
          "reply": "I would like help with parking and safer driving on busy roads.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "entertainment",
          "label": "车载娱乐偏好",
          "groups": [
            [
              "entertainment",
              "music",
              "screen",
              "media"
            ],
            [
              "feature",
              "prefer",
              "use",
              "important",
              "want"
            ]
          ],
          "example": "Which in-car entertainment features would you prefer?",
          "status": "open",
          "reply": "I would like clear navigation, music and phone integration.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "My office has chargers that staff can book.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "testdrive",
          "label": "试驾体验重点",
          "groups": [
            [
              "test drive",
              "drive",
              "try"
            ],
            [
              "feature",
              "check",
              "experience",
              "focus",
              "like",
              "want"
            ]
          ],
          "example": "Which features would you like to experience on a test drive?",
          "status": "open",
          "reply": "I would like to experience the features that matter to my daily use.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around five hundred million rupiah.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Clear navigation and reliable phone integration matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About eighty kilometres per day.",
        "passengers": "Usually one person, sometimes two.",
        "charging": "My office has chargers that staff can book.",
        "budget": "Around five hundred million rupiah.",
        "priority": "Clear navigation and reliable phone integration matter most to me.",
        "use": "I commute across the city and enjoy connected devices.",
        "compare": "An electric car with a larger screen but different software.",
        "warranty": "I want to know how software updates relate to battery protection.",
        "payment": "I would like to understand the deposit first.",
        "delivery": "Next month, after my current lease ends.",
        "contract": "Please explain what is included in the software package.",
        "contact": "A message during my lunch break is best.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "recommend-linh",
      "scene": 1,
      "persona": "商务精英型",
      "recommendedModel": "Comfort E",
      "customer": {
        "name": "Linh",
        "country": "VN",
        "countryName": "越南",
        "city": "Da Nang"
      },
      "context": "前序接待记录：商务精英型。可选教学模拟车型：Family E（空间、实用续航与性价比）、Smart E（驾驶辅助、互联与娱乐）、Comfort E（舒适座舱、高端配置与商务形象）。请据画像选择车型，用易懂英语介绍卖点，再追问适配条件；没有给出的具体参数不要自行承诺。",
      "script": "Thank you for listening to my needs. I visit clients and sometimes travel between cities. Comfort on long journeys and a professional appearance matter most to me. For my next electric car, I want you to recommend a model that fits comfort, premium equipment and professional image. I would appreciate a clear explanation of its practical benefits. I have not arranged a test drive.",
      "translation": "谢谢您倾听我的需求。拜访客户并有跨城市出行，重视长途舒适性和专业形象。对于下一辆电动汽车，我希望您推荐一款符合安静座舱、高端座椅和专业形象需求的车型，并清楚说明实际益处。我尚未安排试驾。",
      "audio": "audio/recommend-linh.wav",
      "facts": [
        {
          "text": "拜访客户并有跨城市出行",
          "evidence": "I visit clients and sometimes travel between cities.",
          "correct": true,
          "id": "recommend-linh-f0"
        },
        {
          "text": "重视长途舒适性和专业形象",
          "evidence": "Comfort on long journeys and a professional appearance matter most to me.",
          "correct": true,
          "id": "recommend-linh-f1"
        },
        {
          "text": "希望得到匹配需求的车型推荐",
          "evidence": "I want you to recommend a model that fits comfort, premium equipment and professional image.",
          "correct": true,
          "id": "recommend-linh-f2"
        },
        {
          "text": "尚未安排试驾",
          "evidence": "I have not arranged a test drive.",
          "correct": true,
          "id": "recommend-linh-f3"
        },
        {
          "text": "客户已说明全部日常使用细节",
          "evidence": "语音未说明全部日常使用细节。",
          "correct": false,
          "id": "recommend-linh-f4"
        },
        {
          "text": "客户已确认某车型的具体续航和价格",
          "evidence": "语音未确认任何具体车型参数或价格。",
          "correct": false,
          "id": "recommend-linh-f5"
        }
      ],
      "topics": [
        {
          "id": "comfort",
          "label": "长途舒适需求",
          "groups": [
            [
              "comfort",
              "seat",
              "cabin"
            ],
            [
              "important",
              "need",
              "prefer",
              "journey",
              "travel"
            ]
          ],
          "example": "Which comfort features matter most on your long journeys?",
          "status": "open",
          "reply": "I value quiet travel and supportive seats on longer journeys.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Usually two or three adults.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "Around one hundred kilometres on working days.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "testdrive",
          "label": "试驾体验重点",
          "groups": [
            [
              "test drive",
              "drive",
              "try"
            ],
            [
              "feature",
              "check",
              "experience",
              "focus",
              "like",
              "want"
            ]
          ],
          "example": "Which features would you like to experience on a test drive?",
          "status": "open",
          "reply": "I would like to experience the features that matter to my daily use.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around nine hundred million dong.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Comfort on long journeys and a professional appearance matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "Around one hundred kilometres on working days.",
        "passengers": "Usually two or three adults.",
        "charging": "There is no home charger, but a public station is near my office.",
        "budget": "Around nine hundred million dong.",
        "priority": "Comfort on long journeys and a professional appearance matter most to me.",
        "use": "I visit clients and sometimes travel between cities.",
        "compare": "A sedan with a lower price but less equipment.",
        "warranty": "I am worried about finding an authorised repair centre when travelling.",
        "payment": "I am considering a company purchase with full payment.",
        "delivery": "Within six weeks.",
        "contract": "I need the service coverage and delivery conditions explained.",
        "contact": "Please email the details before calling.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "recommend-miguel",
      "scene": 1,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Miguel",
        "country": "PH",
        "countryName": "菲律宾",
        "city": "Cebu"
      },
      "context": "前序接待记录：务实家庭型。可选教学模拟车型：Family E（空间、实用续航与性价比）、Smart E（驾驶辅助、互联与娱乐）、Comfort E（舒适座舱、高端配置与商务形象）。请据画像选择车型，用易懂英语介绍卖点，再追问适配条件；没有给出的具体参数不要自行承诺。",
      "script": "Thank you for listening to my needs. I take my children to school and make deliveries for my small business. Low running costs and flexible storage space matter most to me. For my next electric car, I want you to recommend a model that fits space, daily range and total ownership cost. I would appreciate a clear explanation of its practical benefits. I have not arranged a test drive.",
      "translation": "谢谢您倾听我的需求。接送孩子上学并为小生意送货，重视低使用成本和灵活储物空间。对于下一辆电动汽车，我希望您推荐一款符合灵活空间、实用续航和综合性价比需求的车型，并清楚说明实际益处。我尚未安排试驾。",
      "audio": "audio/recommend-miguel.wav",
      "facts": [
        {
          "text": "接送孩子上学并为小生意送货",
          "evidence": "I take my children to school and make deliveries for my small business.",
          "correct": true,
          "id": "recommend-miguel-f0"
        },
        {
          "text": "重视低使用成本和灵活储物空间",
          "evidence": "Low running costs and flexible storage space matter most to me.",
          "correct": true,
          "id": "recommend-miguel-f1"
        },
        {
          "text": "希望得到匹配需求的车型推荐",
          "evidence": "I want you to recommend a model that fits space, daily range and total ownership cost.",
          "correct": true,
          "id": "recommend-miguel-f2"
        },
        {
          "text": "尚未安排试驾",
          "evidence": "I have not arranged a test drive.",
          "correct": true,
          "id": "recommend-miguel-f3"
        },
        {
          "text": "客户已说明全部日常使用细节",
          "evidence": "语音未说明全部日常使用细节。",
          "correct": false,
          "id": "recommend-miguel-f4"
        },
        {
          "text": "客户已确认某车型的具体续航和价格",
          "evidence": "语音未确认任何具体车型参数或价格。",
          "correct": false,
          "id": "recommend-miguel-f5"
        }
      ],
      "topics": [
        {
          "id": "distance",
          "label": "每日行驶里程",
          "groups": [
            [
              "how far",
              "distance",
              "mileage",
              "kilomet",
              "kilometer",
              "kilometre",
              "miles"
            ],
            [
              "daily",
              "each day",
              "per day",
              "every day",
              "a day",
              "typical day",
              "usually"
            ]
          ],
          "example": "How far do you usually drive each day?",
          "status": "open",
          "reply": "About fifty-five kilometres each day.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "passengers",
          "label": "通常乘坐人数",
          "groups": [
            [
              "how many",
              "number of"
            ],
            [
              "people",
              "passengers",
              "family members",
              "children",
              "adults",
              "travel with"
            ]
          ],
          "example": "How many people usually travel with you?",
          "status": "open",
          "reply": "Four people when I travel with my family.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "charging",
          "label": "固定充电条件",
          "groups": [
            [
              "charg",
              "plug"
            ],
            [
              "home",
              "work",
              "parking",
              "access",
              "available",
              "install",
              "where",
              "place"
            ]
          ],
          "example": "Can you charge the car at home?",
          "status": "open",
          "reply": "I have a parking space and need advice on safe charger installation.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around one and a half million pesos.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "testdrive",
          "label": "试驾体验重点",
          "groups": [
            [
              "test drive",
              "drive",
              "try"
            ],
            [
              "feature",
              "check",
              "experience",
              "focus",
              "like",
              "want"
            ]
          ],
          "example": "Which features would you like to experience on a test drive?",
          "status": "open",
          "reply": "I would like to experience the features that matter to my daily use.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Low running costs and flexible storage space matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About fifty-five kilometres each day.",
        "passengers": "Four people when I travel with my family.",
        "charging": "I have a parking space and need advice on safe charger installation.",
        "budget": "Around one and a half million pesos.",
        "priority": "Low running costs and flexible storage space matter most to me.",
        "use": "I take my children to school and make deliveries for my small business.",
        "compare": "A petrol vehicle with more storage but higher fuel costs.",
        "warranty": "I want to understand which maintenance requirements affect the warranty.",
        "payment": "I prefer instalments, depending on the final monthly amount.",
        "delivery": "Before school starts in five weeks.",
        "contract": "Please explain the payment schedule and required documents.",
        "contact": "A phone call in the early evening is best.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "negotiate-narin",
      "scene": 2,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Narin",
        "country": "TH",
        "countryName": "泰国",
        "city": "Bangkok"
      },
      "context": "前序记录：务实家庭型客户考虑 Family E，重视灵活空间、实用续航和综合性价比。先认可顾虑，询问具体比较依据或保障需求，再用价值、技术实际用途与售后资料回应；不要争辩或承诺未核实的优惠与保修政策。",
      "script": "I appreciate your explanation of a flexible cabin, practical range and overall value, but I still have a concern. The total price seems higher than another offer I received. I have seen another offer. I also want to understand the battery warranty and after-sales support. I am open to a fair comparison if you can explain the value without pressuring me.",
      "translation": "我感谢您对灵活空间、实用续航和综合性价比的介绍，但仍有顾虑。认为总价高于收到的另一份报价。我看到过另一份报价。我也想了解电池保修和售后支持。如果您能不施压地说明产品价值，我愿意公平比较。",
      "audio": "audio/negotiate-narin.wav",
      "facts": [
        {
          "text": "认为总价高于收到的另一份报价",
          "evidence": "The total price seems higher than another offer I received.",
          "correct": true,
          "id": "negotiate-narin-f0"
        },
        {
          "text": "已看到另一份报价",
          "evidence": "I have seen another offer.",
          "correct": true,
          "id": "negotiate-narin-f1"
        },
        {
          "text": "希望了解电池保修与售后支持",
          "evidence": "I also want to understand the battery warranty and after-sales support.",
          "correct": true,
          "id": "negotiate-narin-f2"
        },
        {
          "text": "愿意进行不施压的价值比较",
          "evidence": "I am open to a fair comparison if you can explain the value without pressuring me.",
          "correct": true,
          "id": "negotiate-narin-f3"
        },
        {
          "text": "已说明竞品的具体车型",
          "evidence": "语音未说明另一份报价所涉及的具体车型。",
          "correct": false,
          "id": "negotiate-narin-f4"
        },
        {
          "text": "已接受所有价格与服务条件",
          "evidence": "客户仍有顾虑，并没有接受全部条件。",
          "correct": false,
          "id": "negotiate-narin-f5"
        }
      ],
      "topics": [
        {
          "id": "compare",
          "label": "竞品比较依据",
          "groups": [
            [
              "compar",
              "other car",
              "other model",
              "competitor",
              "alternative"
            ],
            [
              "price",
              "cost",
              "model",
              "offer",
              "include",
              "feature"
            ]
          ],
          "example": "Which other model are you comparing the price with?",
          "status": "open",
          "reply": "A smaller electric hatchback with fewer safety features.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "warranty",
          "label": "电池保障方面的顾虑",
          "groups": [
            [
              "battery",
              "warranty",
              "cover",
              "guarantee"
            ],
            [
              "concern",
              "worri",
              "worry",
              "important",
              "know",
              "matter",
              "issue",
              "question"
            ]
          ],
          "example": "What concerns do you have about battery coverage?",
          "status": "open",
          "reply": "I worry about the cost of battery repairs after the warranty ends.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "service",
          "label": "售后服务需求",
          "groups": [
            [
              "service",
              "support",
              "repair",
              "after-sales"
            ],
            [
              "need",
              "important",
              "expect",
              "concern",
              "help",
              "prefer"
            ]
          ],
          "example": "What after-sales support is most important to you?",
          "status": "open",
          "reply": "I would like clear repair support and an authorised service contact.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around eight hundred thousand baht.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "value",
          "label": "价值比较依据",
          "groups": [
            [
              "value",
              "price",
              "cost",
              "benefit"
            ],
            [
              "compare",
              "important",
              "matter",
              "expect",
              "consider"
            ]
          ],
          "example": "Which benefits matter most when you compare the total cost?",
          "status": "open",
          "reply": "I compare the total cost, useful features and service support.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "secondary",
          "reply": "Before the end of next month.",
          "reason": "可以了解，但本环节优先澄清价格比较和保障顾虑。"
        }
      ],
      "replyBank": {
        "distance": "About sixty kilometres each day.",
        "passengers": "Four people, including two children.",
        "charging": "I have my own parking space, but no charger yet.",
        "budget": "Around eight hundred thousand baht.",
        "priority": "Safety and rear-seat space matter most to me.",
        "use": "I commute to work and take my children out on weekends.",
        "compare": "A smaller electric hatchback with fewer safety features.",
        "warranty": "I worry about the cost of battery repairs after the warranty ends.",
        "payment": "I prefer a deposit followed by monthly instalments.",
        "delivery": "Before the end of next month.",
        "contract": "I would like the deposit and cancellation terms explained.",
        "contact": "Email is best for me.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "negotiate-pim",
      "scene": 2,
      "persona": "科技先锋型",
      "recommendedModel": "Smart E",
      "customer": {
        "name": "Pim",
        "country": "TH",
        "countryName": "泰国",
        "city": "Chiang Mai"
      },
      "context": "前序记录：科技先锋型客户考虑 Smart E，重视驾驶辅助、智能互联和车载娱乐。先认可顾虑，询问具体比较依据或保障需求，再用价值、技术实际用途与售后资料回应；不要争辩或承诺未核实的优惠与保修政策。",
      "script": "I appreciate your explanation of driving assistance, connected controls and in-car entertainment, but I still have a concern. I am unsure whether the technology package is worth the extra cost. I have seen another offer. I also want to understand the battery warranty and after-sales support. I am open to a fair comparison if you can explain the value without pressuring me.",
      "translation": "我感谢您对驾驶辅助、智能互联和车载娱乐的介绍，但仍有顾虑。不确定科技配置包是否值得额外花费。我看到过另一份报价。我也想了解电池保修和售后支持。如果您能不施压地说明产品价值，我愿意公平比较。",
      "audio": "audio/negotiate-pim.wav",
      "facts": [
        {
          "text": "不确定科技配置包是否值得额外花费",
          "evidence": "I am unsure whether the technology package is worth the extra cost.",
          "correct": true,
          "id": "negotiate-pim-f0"
        },
        {
          "text": "已看到另一份报价",
          "evidence": "I have seen another offer.",
          "correct": true,
          "id": "negotiate-pim-f1"
        },
        {
          "text": "希望了解电池保修与售后支持",
          "evidence": "I also want to understand the battery warranty and after-sales support.",
          "correct": true,
          "id": "negotiate-pim-f2"
        },
        {
          "text": "愿意进行不施压的价值比较",
          "evidence": "I am open to a fair comparison if you can explain the value without pressuring me.",
          "correct": true,
          "id": "negotiate-pim-f3"
        },
        {
          "text": "已说明竞品的具体车型",
          "evidence": "语音未说明另一份报价所涉及的具体车型。",
          "correct": false,
          "id": "negotiate-pim-f4"
        },
        {
          "text": "已接受所有价格与服务条件",
          "evidence": "客户仍有顾虑，并没有接受全部条件。",
          "correct": false,
          "id": "negotiate-pim-f5"
        }
      ],
      "topics": [
        {
          "id": "compare",
          "label": "竞品比较依据",
          "groups": [
            [
              "compar",
              "other car",
              "other model",
              "competitor",
              "alternative"
            ],
            [
              "price",
              "cost",
              "model",
              "offer",
              "include",
              "feature"
            ]
          ],
          "example": "Which other model are you comparing the price with?",
          "status": "open",
          "reply": "An electric sedan that includes connected services for a limited time.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "warranty",
          "label": "电池保障方面的顾虑",
          "groups": [
            [
              "battery",
              "warranty",
              "cover",
              "guarantee"
            ],
            [
              "concern",
              "worri",
              "worry",
              "important",
              "know",
              "matter",
              "issue",
              "question"
            ]
          ],
          "example": "What concerns do you have about battery coverage?",
          "status": "open",
          "reply": "I want to know which battery faults are covered.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "service",
          "label": "售后服务需求",
          "groups": [
            [
              "service",
              "support",
              "repair",
              "after-sales"
            ],
            [
              "need",
              "important",
              "expect",
              "concern",
              "help",
              "prefer"
            ]
          ],
          "example": "What after-sales support is most important to you?",
          "status": "open",
          "reply": "I would like clear repair support and an authorised service contact.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around one million baht.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "value",
          "label": "价值比较依据",
          "groups": [
            [
              "value",
              "price",
              "cost",
              "benefit"
            ],
            [
              "compare",
              "important",
              "matter",
              "expect",
              "consider"
            ]
          ],
          "example": "Which benefits matter most when you compare the total cost?",
          "status": "open",
          "reply": "I compare the total cost, useful features and service support.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "secondary",
          "reply": "In about six weeks.",
          "reason": "可以了解，但本环节优先澄清价格比较和保障顾虑。"
        }
      ],
      "replyBank": {
        "distance": "About thirty kilometres on a normal day.",
        "passengers": "Usually two adults.",
        "charging": "My building has shared chargers, but availability changes.",
        "budget": "Around one million baht.",
        "priority": "Phone connectivity and helpful driving assistance matter most to me.",
        "use": "I drive to my design studio and enjoy trying new technology.",
        "compare": "An electric sedan that includes connected services for a limited time.",
        "warranty": "I want to know which battery faults are covered.",
        "payment": "I would like to compare a full payment with instalments.",
        "delivery": "In about six weeks.",
        "contract": "I need to understand which connected services require a subscription.",
        "contact": "A text message would be convenient.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "negotiate-anan",
      "scene": 2,
      "persona": "商务精英型",
      "recommendedModel": "Comfort E",
      "customer": {
        "name": "Anan",
        "country": "TH",
        "countryName": "泰国",
        "city": "Phuket"
      },
      "context": "前序记录：商务精英型客户考虑 Comfort E，重视安静座舱、高端座椅和专业形象。先认可顾虑，询问具体比较依据或保障需求，再用价值、技术实际用途与售后资料回应；不要争辩或承诺未核实的优惠与保修政策。",
      "script": "I appreciate your explanation of a quiet cabin, premium seating and a professional image, but I still have a concern. I want to know whether after-sales support justifies the price. I have seen another offer. I also want to understand the battery warranty and after-sales support. I am open to a fair comparison if you can explain the value without pressuring me.",
      "translation": "我感谢您对安静座舱、高端座椅和专业形象的介绍，但仍有顾虑。想确认售后支持是否值得当前价格。我看到过另一份报价。我也想了解电池保修和售后支持。如果您能不施压地说明产品价值，我愿意公平比较。",
      "audio": "audio/negotiate-anan.wav",
      "facts": [
        {
          "text": "想确认售后支持是否值得当前价格",
          "evidence": "I want to know whether after-sales support justifies the price.",
          "correct": true,
          "id": "negotiate-anan-f0"
        },
        {
          "text": "已看到另一份报价",
          "evidence": "I have seen another offer.",
          "correct": true,
          "id": "negotiate-anan-f1"
        },
        {
          "text": "希望了解电池保修与售后支持",
          "evidence": "I also want to understand the battery warranty and after-sales support.",
          "correct": true,
          "id": "negotiate-anan-f2"
        },
        {
          "text": "愿意进行不施压的价值比较",
          "evidence": "I am open to a fair comparison if you can explain the value without pressuring me.",
          "correct": true,
          "id": "negotiate-anan-f3"
        },
        {
          "text": "已说明竞品的具体车型",
          "evidence": "语音未说明另一份报价所涉及的具体车型。",
          "correct": false,
          "id": "negotiate-anan-f4"
        },
        {
          "text": "已接受所有价格与服务条件",
          "evidence": "客户仍有顾虑，并没有接受全部条件。",
          "correct": false,
          "id": "negotiate-anan-f5"
        }
      ],
      "topics": [
        {
          "id": "compare",
          "label": "竞品比较依据",
          "groups": [
            [
              "compar",
              "other car",
              "other model",
              "competitor",
              "alternative"
            ],
            [
              "price",
              "cost",
              "model",
              "offer",
              "include",
              "feature"
            ]
          ],
          "example": "Which other model are you comparing the price with?",
          "status": "open",
          "reply": "A larger sedan with a quieter cabin.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "warranty",
          "label": "电池保障方面的顾虑",
          "groups": [
            [
              "battery",
              "warranty",
              "cover",
              "guarantee"
            ],
            [
              "concern",
              "worri",
              "worry",
              "important",
              "know",
              "matter",
              "issue",
              "question"
            ]
          ],
          "example": "What concerns do you have about battery coverage?",
          "status": "open",
          "reply": "I am concerned about how long battery repairs could take.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "service",
          "label": "售后服务需求",
          "groups": [
            [
              "service",
              "support",
              "repair",
              "after-sales"
            ],
            [
              "need",
              "important",
              "expect",
              "concern",
              "help",
              "prefer"
            ]
          ],
          "example": "What after-sales support is most important to you?",
          "status": "open",
          "reply": "I would like clear repair support and an authorised service contact.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around one and a half million baht.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "value",
          "label": "价值比较依据",
          "groups": [
            [
              "value",
              "price",
              "cost",
              "benefit"
            ],
            [
              "compare",
              "important",
              "matter",
              "expect",
              "consider"
            ]
          ],
          "example": "Which benefits matter most when you compare the total cost?",
          "status": "open",
          "reply": "I compare the total cost, useful features and service support.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "secondary",
          "reply": "Before a business visit in three weeks.",
          "reason": "可以了解，但本环节优先澄清价格比较和保障顾虑。"
        }
      ],
      "replyBank": {
        "distance": "Around ninety kilometres each day.",
        "passengers": "Usually three adults, including me.",
        "charging": "There is a charger at my office, but none at home.",
        "budget": "Around one and a half million baht.",
        "priority": "A quiet cabin and comfortable seats matter most to me.",
        "use": "I drive visiting business partners to meetings.",
        "compare": "A larger sedan with a quieter cabin.",
        "warranty": "I am concerned about how long battery repairs could take.",
        "payment": "My company needs an invoice before arranging payment.",
        "delivery": "Before a business visit in three weeks.",
        "contract": "Please explain the company invoice and delivery terms.",
        "contact": "Please call me in the afternoon.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "negotiate-mali",
      "scene": 2,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Mali",
        "country": "TH",
        "countryName": "泰国",
        "city": "Khon Kaen"
      },
      "context": "前序记录：务实家庭型客户考虑 Family E，重视灵活空间、实用续航和综合性价比。先认可顾虑，询问具体比较依据或保障需求，再用价值、技术实际用途与售后资料回应；不要争辩或承诺未核实的优惠与保修政策。",
      "script": "I appreciate your explanation of a flexible cabin, practical range and overall value, but I still have a concern. I am concerned about extra fees beyond the advertised price. I have seen another offer. I also want to understand the battery warranty and after-sales support. I am open to a fair comparison if you can explain the value without pressuring me.",
      "translation": "我感谢您对灵活空间、实用续航和综合性价比的介绍，但仍有顾虑。担心广告价格之外还有额外费用。我看到过另一份报价。我也想了解电池保修和售后支持。如果您能不施压地说明产品价值，我愿意公平比较。",
      "audio": "audio/negotiate-mali.wav",
      "facts": [
        {
          "text": "担心广告价格之外还有额外费用",
          "evidence": "I am concerned about extra fees beyond the advertised price.",
          "correct": true,
          "id": "negotiate-mali-f0"
        },
        {
          "text": "已看到另一份报价",
          "evidence": "I have seen another offer.",
          "correct": true,
          "id": "negotiate-mali-f1"
        },
        {
          "text": "希望了解电池保修与售后支持",
          "evidence": "I also want to understand the battery warranty and after-sales support.",
          "correct": true,
          "id": "negotiate-mali-f2"
        },
        {
          "text": "愿意进行不施压的价值比较",
          "evidence": "I am open to a fair comparison if you can explain the value without pressuring me.",
          "correct": true,
          "id": "negotiate-mali-f3"
        },
        {
          "text": "已说明竞品的具体车型",
          "evidence": "语音未说明另一份报价所涉及的具体车型。",
          "correct": false,
          "id": "negotiate-mali-f4"
        },
        {
          "text": "已接受所有价格与服务条件",
          "evidence": "客户仍有顾虑，并没有接受全部条件。",
          "correct": false,
          "id": "negotiate-mali-f5"
        }
      ],
      "topics": [
        {
          "id": "compare",
          "label": "竞品比较依据",
          "groups": [
            [
              "compar",
              "other car",
              "other model",
              "competitor",
              "alternative"
            ],
            [
              "price",
              "cost",
              "model",
              "offer",
              "include",
              "feature"
            ]
          ],
          "example": "Which other model are you comparing the price with?",
          "status": "open",
          "reply": "A used electric car with a shorter warranty.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "warranty",
          "label": "电池保障方面的顾虑",
          "groups": [
            [
              "battery",
              "warranty",
              "cover",
              "guarantee"
            ],
            [
              "concern",
              "worri",
              "worry",
              "important",
              "know",
              "matter",
              "issue",
              "question"
            ]
          ],
          "example": "What concerns do you have about battery coverage?",
          "status": "open",
          "reply": "I worry about battery health when I keep the car for many years.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "service",
          "label": "售后服务需求",
          "groups": [
            [
              "service",
              "support",
              "repair",
              "after-sales"
            ],
            [
              "need",
              "important",
              "expect",
              "concern",
              "help",
              "prefer"
            ]
          ],
          "example": "What after-sales support is most important to you?",
          "status": "open",
          "reply": "I would like clear repair support and an authorised service contact.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around seven hundred thousand baht.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "value",
          "label": "价值比较依据",
          "groups": [
            [
              "value",
              "price",
              "cost",
              "benefit"
            ],
            [
              "compare",
              "important",
              "matter",
              "expect",
              "consider"
            ]
          ],
          "example": "Which benefits matter most when you compare the total cost?",
          "status": "open",
          "reply": "I compare the total cost, useful features and service support.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "secondary",
          "reply": "Within two months.",
          "reason": "可以了解，但本环节优先澄清价格比较和保障顾虑。"
        }
      ],
      "replyBank": {
        "distance": "About forty-five kilometres each day.",
        "passengers": "Usually three people, including my parents.",
        "charging": "We use street parking, so I need public charging nearby.",
        "budget": "Around seven hundred thousand baht.",
        "priority": "Easy access and a practical luggage area matter most to me.",
        "use": "I take my parents to appointments and carry supplies for our shop.",
        "compare": "A used electric car with a shorter warranty.",
        "warranty": "I worry about battery health when I keep the car for many years.",
        "payment": "I prefer to pay in full if the total cost is clear.",
        "delivery": "Within two months.",
        "contract": "I would like a clear list of all fees.",
        "contact": "Please send me a message first.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "negotiate-aina",
      "scene": 2,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Aina",
        "country": "MY",
        "countryName": "马来西亚",
        "city": "Kuala Lumpur"
      },
      "context": "前序记录：务实家庭型客户考虑 Family E，重视灵活空间、实用续航和综合性价比。先认可顾虑，询问具体比较依据或保障需求，再用价值、技术实际用途与售后资料回应；不要争辩或承诺未核实的优惠与保修政策。",
      "script": "I appreciate your explanation of a flexible cabin, practical range and overall value, but I still have a concern. The monthly cost may be higher than I planned. I have seen another offer. I also want to understand the battery warranty and after-sales support. I am open to a fair comparison if you can explain the value without pressuring me.",
      "translation": "我感谢您对灵活空间、实用续航和综合性价比的介绍，但仍有顾虑。担心每月支出超出计划。我看到过另一份报价。我也想了解电池保修和售后支持。如果您能不施压地说明产品价值，我愿意公平比较。",
      "audio": "audio/negotiate-aina.wav",
      "facts": [
        {
          "text": "担心每月支出超出计划",
          "evidence": "The monthly cost may be higher than I planned.",
          "correct": true,
          "id": "negotiate-aina-f0"
        },
        {
          "text": "已看到另一份报价",
          "evidence": "I have seen another offer.",
          "correct": true,
          "id": "negotiate-aina-f1"
        },
        {
          "text": "希望了解电池保修与售后支持",
          "evidence": "I also want to understand the battery warranty and after-sales support.",
          "correct": true,
          "id": "negotiate-aina-f2"
        },
        {
          "text": "愿意进行不施压的价值比较",
          "evidence": "I am open to a fair comparison if you can explain the value without pressuring me.",
          "correct": true,
          "id": "negotiate-aina-f3"
        },
        {
          "text": "已说明竞品的具体车型",
          "evidence": "语音未说明另一份报价所涉及的具体车型。",
          "correct": false,
          "id": "negotiate-aina-f4"
        },
        {
          "text": "已接受所有价格与服务条件",
          "evidence": "客户仍有顾虑，并没有接受全部条件。",
          "correct": false,
          "id": "negotiate-aina-f5"
        }
      ],
      "topics": [
        {
          "id": "compare",
          "label": "竞品比较依据",
          "groups": [
            [
              "compar",
              "other car",
              "other model",
              "competitor",
              "alternative"
            ],
            [
              "price",
              "cost",
              "model",
              "offer",
              "include",
              "feature"
            ]
          ],
          "example": "Which other model are you comparing the price with?",
          "status": "open",
          "reply": "A hybrid with a lower starting price.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "warranty",
          "label": "电池保障方面的顾虑",
          "groups": [
            [
              "battery",
              "warranty",
              "cover",
              "guarantee"
            ],
            [
              "concern",
              "worri",
              "worry",
              "important",
              "know",
              "matter",
              "issue",
              "question"
            ]
          ],
          "example": "What concerns do you have about battery coverage?",
          "status": "open",
          "reply": "I want to understand the battery warranty mileage limit.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "service",
          "label": "售后服务需求",
          "groups": [
            [
              "service",
              "support",
              "repair",
              "after-sales"
            ],
            [
              "need",
              "important",
              "expect",
              "concern",
              "help",
              "prefer"
            ]
          ],
          "example": "What after-sales support is most important to you?",
          "status": "open",
          "reply": "I would like clear repair support and an authorised service contact.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around one hundred and twenty thousand ringgit.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "value",
          "label": "价值比较依据",
          "groups": [
            [
              "value",
              "price",
              "cost",
              "benefit"
            ],
            [
              "compare",
              "important",
              "matter",
              "expect",
              "consider"
            ]
          ],
          "example": "Which benefits matter most when you compare the total cost?",
          "status": "open",
          "reply": "I compare the total cost, useful features and service support.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "secondary",
          "reply": "Before our holiday in two months.",
          "reason": "可以了解，但本环节优先澄清价格比较和保障顾虑。"
        }
      ],
      "replyBank": {
        "distance": "About seventy kilometres each weekday.",
        "passengers": "Five family members on weekend trips.",
        "charging": "I can install a charger in my garage after getting approval.",
        "budget": "Around one hundred and twenty thousand ringgit.",
        "priority": "Useful range and enough room for family luggage matter most to me.",
        "use": "I drive to work and visit my parents outside the city.",
        "compare": "A hybrid with a lower starting price.",
        "warranty": "I want to understand the battery warranty mileage limit.",
        "payment": "I would like monthly instalments with a manageable deposit.",
        "delivery": "Before our holiday in two months.",
        "contract": "Please explain the finance conditions.",
        "contact": "Email would help me keep a written record.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "negotiate-budi",
      "scene": 2,
      "persona": "科技先锋型",
      "recommendedModel": "Smart E",
      "customer": {
        "name": "Budi",
        "country": "ID",
        "countryName": "印度尼西亚",
        "city": "Jakarta"
      },
      "context": "前序记录：科技先锋型客户考虑 Smart E，重视驾驶辅助、智能互联和车载娱乐。先认可顾虑，询问具体比较依据或保障需求，再用价值、技术实际用途与售后资料回应；不要争辩或承诺未核实的优惠与保修政策。",
      "script": "I appreciate your explanation of driving assistance, connected controls and in-car entertainment, but I still have a concern. I do not want unexpected charges for software features. I have seen another offer. I also want to understand the battery warranty and after-sales support. I am open to a fair comparison if you can explain the value without pressuring me.",
      "translation": "我感谢您对驾驶辅助、智能互联和车载娱乐的介绍，但仍有顾虑。不希望软件功能产生意外费用。我看到过另一份报价。我也想了解电池保修和售后支持。如果您能不施压地说明产品价值，我愿意公平比较。",
      "audio": "audio/negotiate-budi.wav",
      "facts": [
        {
          "text": "不希望软件功能产生意外费用",
          "evidence": "I do not want unexpected charges for software features.",
          "correct": true,
          "id": "negotiate-budi-f0"
        },
        {
          "text": "已看到另一份报价",
          "evidence": "I have seen another offer.",
          "correct": true,
          "id": "negotiate-budi-f1"
        },
        {
          "text": "希望了解电池保修与售后支持",
          "evidence": "I also want to understand the battery warranty and after-sales support.",
          "correct": true,
          "id": "negotiate-budi-f2"
        },
        {
          "text": "愿意进行不施压的价值比较",
          "evidence": "I am open to a fair comparison if you can explain the value without pressuring me.",
          "correct": true,
          "id": "negotiate-budi-f3"
        },
        {
          "text": "已说明竞品的具体车型",
          "evidence": "语音未说明另一份报价所涉及的具体车型。",
          "correct": false,
          "id": "negotiate-budi-f4"
        },
        {
          "text": "已接受所有价格与服务条件",
          "evidence": "客户仍有顾虑，并没有接受全部条件。",
          "correct": false,
          "id": "negotiate-budi-f5"
        }
      ],
      "topics": [
        {
          "id": "compare",
          "label": "竞品比较依据",
          "groups": [
            [
              "compar",
              "other car",
              "other model",
              "competitor",
              "alternative"
            ],
            [
              "price",
              "cost",
              "model",
              "offer",
              "include",
              "feature"
            ]
          ],
          "example": "Which other model are you comparing the price with?",
          "status": "open",
          "reply": "An electric car with a larger screen but different software.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "warranty",
          "label": "电池保障方面的顾虑",
          "groups": [
            [
              "battery",
              "warranty",
              "cover",
              "guarantee"
            ],
            [
              "concern",
              "worri",
              "worry",
              "important",
              "know",
              "matter",
              "issue",
              "question"
            ]
          ],
          "example": "What concerns do you have about battery coverage?",
          "status": "open",
          "reply": "I want to know how software updates relate to battery protection.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "service",
          "label": "售后服务需求",
          "groups": [
            [
              "service",
              "support",
              "repair",
              "after-sales"
            ],
            [
              "need",
              "important",
              "expect",
              "concern",
              "help",
              "prefer"
            ]
          ],
          "example": "What after-sales support is most important to you?",
          "status": "open",
          "reply": "I would like clear repair support and an authorised service contact.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around five hundred million rupiah.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "value",
          "label": "价值比较依据",
          "groups": [
            [
              "value",
              "price",
              "cost",
              "benefit"
            ],
            [
              "compare",
              "important",
              "matter",
              "expect",
              "consider"
            ]
          ],
          "example": "Which benefits matter most when you compare the total cost?",
          "status": "open",
          "reply": "I compare the total cost, useful features and service support.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "secondary",
          "reply": "Next month, after my current lease ends.",
          "reason": "可以了解，但本环节优先澄清价格比较和保障顾虑。"
        }
      ],
      "replyBank": {
        "distance": "About eighty kilometres per day.",
        "passengers": "Usually one person, sometimes two.",
        "charging": "My office has chargers that staff can book.",
        "budget": "Around five hundred million rupiah.",
        "priority": "Clear navigation and reliable phone integration matter most to me.",
        "use": "I commute across the city and enjoy connected devices.",
        "compare": "An electric car with a larger screen but different software.",
        "warranty": "I want to know how software updates relate to battery protection.",
        "payment": "I would like to understand the deposit first.",
        "delivery": "Next month, after my current lease ends.",
        "contract": "Please explain what is included in the software package.",
        "contact": "A message during my lunch break is best.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "negotiate-linh",
      "scene": 2,
      "persona": "商务精英型",
      "recommendedModel": "Comfort E",
      "customer": {
        "name": "Linh",
        "country": "VN",
        "countryName": "越南",
        "city": "Da Nang"
      },
      "context": "前序记录：商务精英型客户考虑 Comfort E，重视安静座舱、高端座椅和专业形象。先认可顾虑，询问具体比较依据或保障需求，再用价值、技术实际用途与售后资料回应；不要争辩或承诺未核实的优惠与保修政策。",
      "script": "I appreciate your explanation of a quiet cabin, premium seating and a professional image, but I still have a concern. I want to be sure the service network meets my travel needs. I have seen another offer. I also want to understand the battery warranty and after-sales support. I am open to a fair comparison if you can explain the value without pressuring me.",
      "translation": "我感谢您对安静座舱、高端座椅和专业形象的介绍，但仍有顾虑。想确认服务网络适合出行需求。我看到过另一份报价。我也想了解电池保修和售后支持。如果您能不施压地说明产品价值，我愿意公平比较。",
      "audio": "audio/negotiate-linh.wav",
      "facts": [
        {
          "text": "想确认服务网络适合出行需求",
          "evidence": "I want to be sure the service network meets my travel needs.",
          "correct": true,
          "id": "negotiate-linh-f0"
        },
        {
          "text": "已看到另一份报价",
          "evidence": "I have seen another offer.",
          "correct": true,
          "id": "negotiate-linh-f1"
        },
        {
          "text": "希望了解电池保修与售后支持",
          "evidence": "I also want to understand the battery warranty and after-sales support.",
          "correct": true,
          "id": "negotiate-linh-f2"
        },
        {
          "text": "愿意进行不施压的价值比较",
          "evidence": "I am open to a fair comparison if you can explain the value without pressuring me.",
          "correct": true,
          "id": "negotiate-linh-f3"
        },
        {
          "text": "已说明竞品的具体车型",
          "evidence": "语音未说明另一份报价所涉及的具体车型。",
          "correct": false,
          "id": "negotiate-linh-f4"
        },
        {
          "text": "已接受所有价格与服务条件",
          "evidence": "客户仍有顾虑，并没有接受全部条件。",
          "correct": false,
          "id": "negotiate-linh-f5"
        }
      ],
      "topics": [
        {
          "id": "compare",
          "label": "竞品比较依据",
          "groups": [
            [
              "compar",
              "other car",
              "other model",
              "competitor",
              "alternative"
            ],
            [
              "price",
              "cost",
              "model",
              "offer",
              "include",
              "feature"
            ]
          ],
          "example": "Which other model are you comparing the price with?",
          "status": "open",
          "reply": "A sedan with a lower price but less equipment.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "warranty",
          "label": "电池保障方面的顾虑",
          "groups": [
            [
              "battery",
              "warranty",
              "cover",
              "guarantee"
            ],
            [
              "concern",
              "worri",
              "worry",
              "important",
              "know",
              "matter",
              "issue",
              "question"
            ]
          ],
          "example": "What concerns do you have about battery coverage?",
          "status": "open",
          "reply": "I am worried about finding an authorised repair centre when travelling.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "service",
          "label": "售后服务需求",
          "groups": [
            [
              "service",
              "support",
              "repair",
              "after-sales"
            ],
            [
              "need",
              "important",
              "expect",
              "concern",
              "help",
              "prefer"
            ]
          ],
          "example": "What after-sales support is most important to you?",
          "status": "open",
          "reply": "I would like clear repair support and an authorised service contact.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around nine hundred million dong.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "value",
          "label": "价值比较依据",
          "groups": [
            [
              "value",
              "price",
              "cost",
              "benefit"
            ],
            [
              "compare",
              "important",
              "matter",
              "expect",
              "consider"
            ]
          ],
          "example": "Which benefits matter most when you compare the total cost?",
          "status": "open",
          "reply": "I compare the total cost, useful features and service support.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "secondary",
          "reply": "Within six weeks.",
          "reason": "可以了解，但本环节优先澄清价格比较和保障顾虑。"
        }
      ],
      "replyBank": {
        "distance": "Around one hundred kilometres on working days.",
        "passengers": "Usually two or three adults.",
        "charging": "There is no home charger, but a public station is near my office.",
        "budget": "Around nine hundred million dong.",
        "priority": "Comfort on long journeys and a professional appearance matter most to me.",
        "use": "I visit clients and sometimes travel between cities.",
        "compare": "A sedan with a lower price but less equipment.",
        "warranty": "I am worried about finding an authorised repair centre when travelling.",
        "payment": "I am considering a company purchase with full payment.",
        "delivery": "Within six weeks.",
        "contract": "I need the service coverage and delivery conditions explained.",
        "contact": "Please email the details before calling.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "negotiate-miguel",
      "scene": 2,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Miguel",
        "country": "PH",
        "countryName": "菲律宾",
        "city": "Cebu"
      },
      "context": "前序记录：务实家庭型客户考虑 Family E，重视灵活空间、实用续航和综合性价比。先认可顾虑，询问具体比较依据或保障需求，再用价值、技术实际用途与售后资料回应；不要争辩或承诺未核实的优惠与保修政策。",
      "script": "I appreciate your explanation of a flexible cabin, practical range and overall value, but I still have a concern. I need to compare the purchase price with long-term running costs. I have seen another offer. I also want to understand the battery warranty and after-sales support. I am open to a fair comparison if you can explain the value without pressuring me.",
      "translation": "我感谢您对灵活空间、实用续航和综合性价比的介绍，但仍有顾虑。需要对比购车价格与长期使用成本。我看到过另一份报价。我也想了解电池保修和售后支持。如果您能不施压地说明产品价值，我愿意公平比较。",
      "audio": "audio/negotiate-miguel.wav",
      "facts": [
        {
          "text": "需要对比购车价格与长期使用成本",
          "evidence": "I need to compare the purchase price with long-term running costs.",
          "correct": true,
          "id": "negotiate-miguel-f0"
        },
        {
          "text": "已看到另一份报价",
          "evidence": "I have seen another offer.",
          "correct": true,
          "id": "negotiate-miguel-f1"
        },
        {
          "text": "希望了解电池保修与售后支持",
          "evidence": "I also want to understand the battery warranty and after-sales support.",
          "correct": true,
          "id": "negotiate-miguel-f2"
        },
        {
          "text": "愿意进行不施压的价值比较",
          "evidence": "I am open to a fair comparison if you can explain the value without pressuring me.",
          "correct": true,
          "id": "negotiate-miguel-f3"
        },
        {
          "text": "已说明竞品的具体车型",
          "evidence": "语音未说明另一份报价所涉及的具体车型。",
          "correct": false,
          "id": "negotiate-miguel-f4"
        },
        {
          "text": "已接受所有价格与服务条件",
          "evidence": "客户仍有顾虑，并没有接受全部条件。",
          "correct": false,
          "id": "negotiate-miguel-f5"
        }
      ],
      "topics": [
        {
          "id": "compare",
          "label": "竞品比较依据",
          "groups": [
            [
              "compar",
              "other car",
              "other model",
              "competitor",
              "alternative"
            ],
            [
              "price",
              "cost",
              "model",
              "offer",
              "include",
              "feature"
            ]
          ],
          "example": "Which other model are you comparing the price with?",
          "status": "open",
          "reply": "A petrol vehicle with more storage but higher fuel costs.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "warranty",
          "label": "电池保障方面的顾虑",
          "groups": [
            [
              "battery",
              "warranty",
              "cover",
              "guarantee"
            ],
            [
              "concern",
              "worri",
              "worry",
              "important",
              "know",
              "matter",
              "issue",
              "question"
            ]
          ],
          "example": "What concerns do you have about battery coverage?",
          "status": "open",
          "reply": "I want to understand which maintenance requirements affect the warranty.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "service",
          "label": "售后服务需求",
          "groups": [
            [
              "service",
              "support",
              "repair",
              "after-sales"
            ],
            [
              "need",
              "important",
              "expect",
              "concern",
              "help",
              "prefer"
            ]
          ],
          "example": "What after-sales support is most important to you?",
          "status": "open",
          "reply": "I would like clear repair support and an authorised service contact.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "budget",
          "label": "可接受的预算范围",
          "groups": [
            [
              "budget",
              "spend",
              "afford",
              "price range",
              "comfortable paying",
              "pay for"
            ],
            [
              "what",
              "how much",
              "range",
              "maximum",
              "limit",
              "amount"
            ]
          ],
          "example": "What budget do you have in mind?",
          "status": "open",
          "reply": "Around one and a half million pesos.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "value",
          "label": "价值比较依据",
          "groups": [
            [
              "value",
              "price",
              "cost",
              "benefit"
            ],
            [
              "compare",
              "important",
              "matter",
              "expect",
              "consider"
            ]
          ],
          "example": "Which benefits matter most when you compare the total cost?",
          "status": "open",
          "reply": "I compare the total cost, useful features and service support.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "secondary",
          "reply": "Before school starts in five weeks.",
          "reason": "可以了解，但本环节优先澄清价格比较和保障顾虑。"
        }
      ],
      "replyBank": {
        "distance": "About fifty-five kilometres each day.",
        "passengers": "Four people when I travel with my family.",
        "charging": "I have a parking space and need advice on safe charger installation.",
        "budget": "Around one and a half million pesos.",
        "priority": "Low running costs and flexible storage space matter most to me.",
        "use": "I take my children to school and make deliveries for my small business.",
        "compare": "A petrol vehicle with more storage but higher fuel costs.",
        "warranty": "I want to understand which maintenance requirements affect the warranty.",
        "payment": "I prefer instalments, depending on the final monthly amount.",
        "delivery": "Before school starts in five weeks.",
        "contract": "Please explain the payment schedule and required documents.",
        "contact": "A phone call in the early evening is best.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "close-narin",
      "scene": 3,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Narin",
        "country": "TH",
        "countryName": "泰国",
        "city": "Bangkok"
      },
      "context": "前序记录：为务实家庭型客户介绍 Family E，核心优势为灵活空间、实用续航和综合性价比，贴合工作通勤及周末带孩子出行。先总结个性化匹配点，再确认购买意愿；清楚说明核对合同、付款和安排交付，礼貌结束接待。具体金额和日期需双方确认。",
      "script": "The Family E seems to fit my needs. I commute to work and take my children out on weekends. I value a flexible cabin, practical range and overall value. I would like to move forward if the final terms are clear. Before we agree, please explain the contract, payment arrangements and expected delivery time. I have not signed or paid a deposit yet. Could we confirm the next steps together?",
      "translation": "Family E 看起来符合我的需要。工作通勤及周末带孩子出行，我重视灵活空间、实用续航和综合性价比。如果最终条款清楚，我愿意推进购买。达成共识前，请解释合同、付款安排和预计提车时间。我尚未签约或支付订金。我们能否一起确认后续步骤？",
      "audio": "audio/close-narin.wav",
      "facts": [
        {
          "text": "认为推荐车型符合需求",
          "evidence": "The Family E seems to fit my needs.",
          "correct": true,
          "id": "close-narin-f0"
        },
        {
          "text": "工作通勤及周末带孩子出行",
          "evidence": "I commute to work and take my children out on weekends.",
          "correct": true,
          "id": "close-narin-f1"
        },
        {
          "text": "希望了解合同、付款和交付",
          "evidence": "Please explain the contract, payment arrangements and expected delivery time.",
          "correct": true,
          "id": "close-narin-f2"
        },
        {
          "text": "尚未签约或支付订金",
          "evidence": "I have not signed or paid a deposit yet.",
          "correct": true,
          "id": "close-narin-f3"
        },
        {
          "text": "已经同意最终合同条款",
          "evidence": "客户表示需先明确最终条款。",
          "correct": false,
          "id": "close-narin-f4"
        },
        {
          "text": "具体提车日期已经确定",
          "evidence": "客户希望了解预计交付时间，未确定日期。",
          "correct": false,
          "id": "close-narin-f5"
        }
      ],
      "topics": [
        {
          "id": "decision",
          "label": "是否准备进入购车流程",
          "groups": [
            [
              "ready",
              "proceed",
              "move forward",
              "decision",
              "purchase"
            ],
            [
              "are you",
              "would you",
              "when",
              "prefer",
              "like"
            ]
          ],
          "example": "Would you be ready to move forward after we review the terms?",
          "status": "open",
          "reply": "Yes, I am ready to continue once we review the written terms.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "payment",
          "label": "偏好的付款安排",
          "groups": [
            [
              "pay",
              "deposit",
              "instalment",
              "installment",
              "financ"
            ],
            [
              "prefer",
              "plan",
              "how",
              "arrange",
              "option",
              "explain",
              "would like"
            ]
          ],
          "example": "How would you prefer to arrange payment?",
          "status": "open",
          "reply": "I prefer a deposit followed by monthly instalments.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "open",
          "reply": "Before the end of next month.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contract",
          "label": "需解释的合同事项",
          "groups": [
            [
              "contract",
              "agreement",
              "terms",
              "sign"
            ],
            [
              "explain",
              "clarif",
              "question",
              "understand",
              "detail",
              "know"
            ]
          ],
          "example": "Which contract details would you like me to explain?",
          "status": "open",
          "reply": "I would like the deposit and cancellation terms explained.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contact",
          "label": "后续联系偏好",
          "groups": [
            [
              "contact",
              "call",
              "email",
              "message",
              "reach"
            ],
            [
              "prefer",
              "how",
              "when",
              "best",
              "would like"
            ]
          ],
          "example": "How would you prefer us to contact you?",
          "status": "open",
          "reply": "Email is best for me.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Safety and rear-seat space matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About sixty kilometres each day.",
        "passengers": "Four people, including two children.",
        "charging": "I have my own parking space, but no charger yet.",
        "budget": "Around eight hundred thousand baht.",
        "priority": "Safety and rear-seat space matter most to me.",
        "use": "I commute to work and take my children out on weekends.",
        "compare": "A smaller electric hatchback with fewer safety features.",
        "warranty": "I worry about the cost of battery repairs after the warranty ends.",
        "payment": "I prefer a deposit followed by monthly instalments.",
        "delivery": "Before the end of next month.",
        "contract": "I would like the deposit and cancellation terms explained.",
        "contact": "Email is best for me.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "close-pim",
      "scene": 3,
      "persona": "科技先锋型",
      "recommendedModel": "Smart E",
      "customer": {
        "name": "Pim",
        "country": "TH",
        "countryName": "泰国",
        "city": "Chiang Mai"
      },
      "context": "前序记录：为科技先锋型客户介绍 Smart E，核心优势为驾驶辅助、智能互联和车载娱乐，贴合往返设计工作室并喜欢新技术。先总结个性化匹配点，再确认购买意愿；清楚说明核对合同、付款和安排交付，礼貌结束接待。具体金额和日期需双方确认。",
      "script": "The Smart E seems to fit my needs. I drive to my design studio and enjoy trying new technology. I value driving assistance, connected controls and in-car entertainment. I would like to move forward if the final terms are clear. Before we agree, please explain the contract, payment arrangements and expected delivery time. I have not signed or paid a deposit yet. Could we confirm the next steps together?",
      "translation": "Smart E 看起来符合我的需要。往返设计工作室并喜欢新技术，我重视驾驶辅助、智能互联和车载娱乐。如果最终条款清楚，我愿意推进购买。达成共识前，请解释合同、付款安排和预计提车时间。我尚未签约或支付订金。我们能否一起确认后续步骤？",
      "audio": "audio/close-pim.wav",
      "facts": [
        {
          "text": "认为推荐车型符合需求",
          "evidence": "The Smart E seems to fit my needs.",
          "correct": true,
          "id": "close-pim-f0"
        },
        {
          "text": "往返设计工作室并喜欢新技术",
          "evidence": "I drive to my design studio and enjoy trying new technology.",
          "correct": true,
          "id": "close-pim-f1"
        },
        {
          "text": "希望了解合同、付款和交付",
          "evidence": "Please explain the contract, payment arrangements and expected delivery time.",
          "correct": true,
          "id": "close-pim-f2"
        },
        {
          "text": "尚未签约或支付订金",
          "evidence": "I have not signed or paid a deposit yet.",
          "correct": true,
          "id": "close-pim-f3"
        },
        {
          "text": "已经同意最终合同条款",
          "evidence": "客户表示需先明确最终条款。",
          "correct": false,
          "id": "close-pim-f4"
        },
        {
          "text": "具体提车日期已经确定",
          "evidence": "客户希望了解预计交付时间，未确定日期。",
          "correct": false,
          "id": "close-pim-f5"
        }
      ],
      "topics": [
        {
          "id": "decision",
          "label": "是否准备进入购车流程",
          "groups": [
            [
              "ready",
              "proceed",
              "move forward",
              "decision",
              "purchase"
            ],
            [
              "are you",
              "would you",
              "when",
              "prefer",
              "like"
            ]
          ],
          "example": "Would you be ready to move forward after we review the terms?",
          "status": "open",
          "reply": "Yes, I am ready to continue once we review the written terms.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "payment",
          "label": "偏好的付款安排",
          "groups": [
            [
              "pay",
              "deposit",
              "instalment",
              "installment",
              "financ"
            ],
            [
              "prefer",
              "plan",
              "how",
              "arrange",
              "option",
              "explain",
              "would like"
            ]
          ],
          "example": "How would you prefer to arrange payment?",
          "status": "open",
          "reply": "I would like to compare a full payment with instalments.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "open",
          "reply": "In about six weeks.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contract",
          "label": "需解释的合同事项",
          "groups": [
            [
              "contract",
              "agreement",
              "terms",
              "sign"
            ],
            [
              "explain",
              "clarif",
              "question",
              "understand",
              "detail",
              "know"
            ]
          ],
          "example": "Which contract details would you like me to explain?",
          "status": "open",
          "reply": "I need to understand which connected services require a subscription.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contact",
          "label": "后续联系偏好",
          "groups": [
            [
              "contact",
              "call",
              "email",
              "message",
              "reach"
            ],
            [
              "prefer",
              "how",
              "when",
              "best",
              "would like"
            ]
          ],
          "example": "How would you prefer us to contact you?",
          "status": "open",
          "reply": "A text message would be convenient.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Phone connectivity and helpful driving assistance matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About thirty kilometres on a normal day.",
        "passengers": "Usually two adults.",
        "charging": "My building has shared chargers, but availability changes.",
        "budget": "Around one million baht.",
        "priority": "Phone connectivity and helpful driving assistance matter most to me.",
        "use": "I drive to my design studio and enjoy trying new technology.",
        "compare": "An electric sedan that includes connected services for a limited time.",
        "warranty": "I want to know which battery faults are covered.",
        "payment": "I would like to compare a full payment with instalments.",
        "delivery": "In about six weeks.",
        "contract": "I need to understand which connected services require a subscription.",
        "contact": "A text message would be convenient.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "close-anan",
      "scene": 3,
      "persona": "商务精英型",
      "recommendedModel": "Comfort E",
      "customer": {
        "name": "Anan",
        "country": "TH",
        "countryName": "泰国",
        "city": "Phuket"
      },
      "context": "前序记录：为商务精英型客户介绍 Comfort E，核心优势为安静座舱、高端座椅和专业形象，贴合接送商务伙伴参加会议。先总结个性化匹配点，再确认购买意愿；清楚说明核对合同、付款和安排交付，礼貌结束接待。具体金额和日期需双方确认。",
      "script": "The Comfort E seems to fit my needs. I drive visiting business partners to meetings. I value a quiet cabin, premium seating and a professional image. I would like to move forward if the final terms are clear. Before we agree, please explain the contract, payment arrangements and expected delivery time. I have not signed or paid a deposit yet. Could we confirm the next steps together?",
      "translation": "Comfort E 看起来符合我的需要。接送商务伙伴参加会议，我重视安静座舱、高端座椅和专业形象。如果最终条款清楚，我愿意推进购买。达成共识前，请解释合同、付款安排和预计提车时间。我尚未签约或支付订金。我们能否一起确认后续步骤？",
      "audio": "audio/close-anan.wav",
      "facts": [
        {
          "text": "认为推荐车型符合需求",
          "evidence": "The Comfort E seems to fit my needs.",
          "correct": true,
          "id": "close-anan-f0"
        },
        {
          "text": "接送商务伙伴参加会议",
          "evidence": "I drive visiting business partners to meetings.",
          "correct": true,
          "id": "close-anan-f1"
        },
        {
          "text": "希望了解合同、付款和交付",
          "evidence": "Please explain the contract, payment arrangements and expected delivery time.",
          "correct": true,
          "id": "close-anan-f2"
        },
        {
          "text": "尚未签约或支付订金",
          "evidence": "I have not signed or paid a deposit yet.",
          "correct": true,
          "id": "close-anan-f3"
        },
        {
          "text": "已经同意最终合同条款",
          "evidence": "客户表示需先明确最终条款。",
          "correct": false,
          "id": "close-anan-f4"
        },
        {
          "text": "具体提车日期已经确定",
          "evidence": "客户希望了解预计交付时间，未确定日期。",
          "correct": false,
          "id": "close-anan-f5"
        }
      ],
      "topics": [
        {
          "id": "decision",
          "label": "是否准备进入购车流程",
          "groups": [
            [
              "ready",
              "proceed",
              "move forward",
              "decision",
              "purchase"
            ],
            [
              "are you",
              "would you",
              "when",
              "prefer",
              "like"
            ]
          ],
          "example": "Would you be ready to move forward after we review the terms?",
          "status": "open",
          "reply": "Yes, I am ready to continue once we review the written terms.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "payment",
          "label": "偏好的付款安排",
          "groups": [
            [
              "pay",
              "deposit",
              "instalment",
              "installment",
              "financ"
            ],
            [
              "prefer",
              "plan",
              "how",
              "arrange",
              "option",
              "explain",
              "would like"
            ]
          ],
          "example": "How would you prefer to arrange payment?",
          "status": "open",
          "reply": "My company needs an invoice before arranging payment.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "open",
          "reply": "Before a business visit in three weeks.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contract",
          "label": "需解释的合同事项",
          "groups": [
            [
              "contract",
              "agreement",
              "terms",
              "sign"
            ],
            [
              "explain",
              "clarif",
              "question",
              "understand",
              "detail",
              "know"
            ]
          ],
          "example": "Which contract details would you like me to explain?",
          "status": "open",
          "reply": "Please explain the company invoice and delivery terms.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contact",
          "label": "后续联系偏好",
          "groups": [
            [
              "contact",
              "call",
              "email",
              "message",
              "reach"
            ],
            [
              "prefer",
              "how",
              "when",
              "best",
              "would like"
            ]
          ],
          "example": "How would you prefer us to contact you?",
          "status": "open",
          "reply": "Please call me in the afternoon.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "A quiet cabin and comfortable seats matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "Around ninety kilometres each day.",
        "passengers": "Usually three adults, including me.",
        "charging": "There is a charger at my office, but none at home.",
        "budget": "Around one and a half million baht.",
        "priority": "A quiet cabin and comfortable seats matter most to me.",
        "use": "I drive visiting business partners to meetings.",
        "compare": "A larger sedan with a quieter cabin.",
        "warranty": "I am concerned about how long battery repairs could take.",
        "payment": "My company needs an invoice before arranging payment.",
        "delivery": "Before a business visit in three weeks.",
        "contract": "Please explain the company invoice and delivery terms.",
        "contact": "Please call me in the afternoon.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "close-mali",
      "scene": 3,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Mali",
        "country": "TH",
        "countryName": "泰国",
        "city": "Khon Kaen"
      },
      "context": "前序记录：为务实家庭型客户介绍 Family E，核心优势为灵活空间、实用续航和综合性价比，贴合接送父母就医并为商店运送物资。先总结个性化匹配点，再确认购买意愿；清楚说明核对合同、付款和安排交付，礼貌结束接待。具体金额和日期需双方确认。",
      "script": "The Family E seems to fit my needs. I take my parents to appointments and carry supplies for our shop. I value a flexible cabin, practical range and overall value. I would like to move forward if the final terms are clear. Before we agree, please explain the contract, payment arrangements and expected delivery time. I have not signed or paid a deposit yet. Could we confirm the next steps together?",
      "translation": "Family E 看起来符合我的需要。接送父母就医并为商店运送物资，我重视灵活空间、实用续航和综合性价比。如果最终条款清楚，我愿意推进购买。达成共识前，请解释合同、付款安排和预计提车时间。我尚未签约或支付订金。我们能否一起确认后续步骤？",
      "audio": "audio/close-mali.wav",
      "facts": [
        {
          "text": "认为推荐车型符合需求",
          "evidence": "The Family E seems to fit my needs.",
          "correct": true,
          "id": "close-mali-f0"
        },
        {
          "text": "接送父母就医并为商店运送物资",
          "evidence": "I take my parents to appointments and carry supplies for our shop.",
          "correct": true,
          "id": "close-mali-f1"
        },
        {
          "text": "希望了解合同、付款和交付",
          "evidence": "Please explain the contract, payment arrangements and expected delivery time.",
          "correct": true,
          "id": "close-mali-f2"
        },
        {
          "text": "尚未签约或支付订金",
          "evidence": "I have not signed or paid a deposit yet.",
          "correct": true,
          "id": "close-mali-f3"
        },
        {
          "text": "已经同意最终合同条款",
          "evidence": "客户表示需先明确最终条款。",
          "correct": false,
          "id": "close-mali-f4"
        },
        {
          "text": "具体提车日期已经确定",
          "evidence": "客户希望了解预计交付时间，未确定日期。",
          "correct": false,
          "id": "close-mali-f5"
        }
      ],
      "topics": [
        {
          "id": "decision",
          "label": "是否准备进入购车流程",
          "groups": [
            [
              "ready",
              "proceed",
              "move forward",
              "decision",
              "purchase"
            ],
            [
              "are you",
              "would you",
              "when",
              "prefer",
              "like"
            ]
          ],
          "example": "Would you be ready to move forward after we review the terms?",
          "status": "open",
          "reply": "Yes, I am ready to continue once we review the written terms.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "payment",
          "label": "偏好的付款安排",
          "groups": [
            [
              "pay",
              "deposit",
              "instalment",
              "installment",
              "financ"
            ],
            [
              "prefer",
              "plan",
              "how",
              "arrange",
              "option",
              "explain",
              "would like"
            ]
          ],
          "example": "How would you prefer to arrange payment?",
          "status": "open",
          "reply": "I prefer to pay in full if the total cost is clear.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "open",
          "reply": "Within two months.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contract",
          "label": "需解释的合同事项",
          "groups": [
            [
              "contract",
              "agreement",
              "terms",
              "sign"
            ],
            [
              "explain",
              "clarif",
              "question",
              "understand",
              "detail",
              "know"
            ]
          ],
          "example": "Which contract details would you like me to explain?",
          "status": "open",
          "reply": "I would like a clear list of all fees.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contact",
          "label": "后续联系偏好",
          "groups": [
            [
              "contact",
              "call",
              "email",
              "message",
              "reach"
            ],
            [
              "prefer",
              "how",
              "when",
              "best",
              "would like"
            ]
          ],
          "example": "How would you prefer us to contact you?",
          "status": "open",
          "reply": "Please send me a message first.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Easy access and a practical luggage area matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About forty-five kilometres each day.",
        "passengers": "Usually three people, including my parents.",
        "charging": "We use street parking, so I need public charging nearby.",
        "budget": "Around seven hundred thousand baht.",
        "priority": "Easy access and a practical luggage area matter most to me.",
        "use": "I take my parents to appointments and carry supplies for our shop.",
        "compare": "A used electric car with a shorter warranty.",
        "warranty": "I worry about battery health when I keep the car for many years.",
        "payment": "I prefer to pay in full if the total cost is clear.",
        "delivery": "Within two months.",
        "contract": "I would like a clear list of all fees.",
        "contact": "Please send me a message first.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "close-aina",
      "scene": 3,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Aina",
        "country": "MY",
        "countryName": "马来西亚",
        "city": "Kuala Lumpur"
      },
      "context": "前序记录：为务实家庭型客户介绍 Family E，核心优势为灵活空间、实用续航和综合性价比，贴合工作通勤并到城外探望父母。先总结个性化匹配点，再确认购买意愿；清楚说明核对合同、付款和安排交付，礼貌结束接待。具体金额和日期需双方确认。",
      "script": "The Family E seems to fit my needs. I drive to work and visit my parents outside the city. I value a flexible cabin, practical range and overall value. I would like to move forward if the final terms are clear. Before we agree, please explain the contract, payment arrangements and expected delivery time. I have not signed or paid a deposit yet. Could we confirm the next steps together?",
      "translation": "Family E 看起来符合我的需要。工作通勤并到城外探望父母，我重视灵活空间、实用续航和综合性价比。如果最终条款清楚，我愿意推进购买。达成共识前，请解释合同、付款安排和预计提车时间。我尚未签约或支付订金。我们能否一起确认后续步骤？",
      "audio": "audio/close-aina.wav",
      "facts": [
        {
          "text": "认为推荐车型符合需求",
          "evidence": "The Family E seems to fit my needs.",
          "correct": true,
          "id": "close-aina-f0"
        },
        {
          "text": "工作通勤并到城外探望父母",
          "evidence": "I drive to work and visit my parents outside the city.",
          "correct": true,
          "id": "close-aina-f1"
        },
        {
          "text": "希望了解合同、付款和交付",
          "evidence": "Please explain the contract, payment arrangements and expected delivery time.",
          "correct": true,
          "id": "close-aina-f2"
        },
        {
          "text": "尚未签约或支付订金",
          "evidence": "I have not signed or paid a deposit yet.",
          "correct": true,
          "id": "close-aina-f3"
        },
        {
          "text": "已经同意最终合同条款",
          "evidence": "客户表示需先明确最终条款。",
          "correct": false,
          "id": "close-aina-f4"
        },
        {
          "text": "具体提车日期已经确定",
          "evidence": "客户希望了解预计交付时间，未确定日期。",
          "correct": false,
          "id": "close-aina-f5"
        }
      ],
      "topics": [
        {
          "id": "decision",
          "label": "是否准备进入购车流程",
          "groups": [
            [
              "ready",
              "proceed",
              "move forward",
              "decision",
              "purchase"
            ],
            [
              "are you",
              "would you",
              "when",
              "prefer",
              "like"
            ]
          ],
          "example": "Would you be ready to move forward after we review the terms?",
          "status": "open",
          "reply": "Yes, I am ready to continue once we review the written terms.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "payment",
          "label": "偏好的付款安排",
          "groups": [
            [
              "pay",
              "deposit",
              "instalment",
              "installment",
              "financ"
            ],
            [
              "prefer",
              "plan",
              "how",
              "arrange",
              "option",
              "explain",
              "would like"
            ]
          ],
          "example": "How would you prefer to arrange payment?",
          "status": "open",
          "reply": "I would like monthly instalments with a manageable deposit.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "open",
          "reply": "Before our holiday in two months.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contract",
          "label": "需解释的合同事项",
          "groups": [
            [
              "contract",
              "agreement",
              "terms",
              "sign"
            ],
            [
              "explain",
              "clarif",
              "question",
              "understand",
              "detail",
              "know"
            ]
          ],
          "example": "Which contract details would you like me to explain?",
          "status": "open",
          "reply": "Please explain the finance conditions.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contact",
          "label": "后续联系偏好",
          "groups": [
            [
              "contact",
              "call",
              "email",
              "message",
              "reach"
            ],
            [
              "prefer",
              "how",
              "when",
              "best",
              "would like"
            ]
          ],
          "example": "How would you prefer us to contact you?",
          "status": "open",
          "reply": "Email would help me keep a written record.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Useful range and enough room for family luggage matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About seventy kilometres each weekday.",
        "passengers": "Five family members on weekend trips.",
        "charging": "I can install a charger in my garage after getting approval.",
        "budget": "Around one hundred and twenty thousand ringgit.",
        "priority": "Useful range and enough room for family luggage matter most to me.",
        "use": "I drive to work and visit my parents outside the city.",
        "compare": "A hybrid with a lower starting price.",
        "warranty": "I want to understand the battery warranty mileage limit.",
        "payment": "I would like monthly instalments with a manageable deposit.",
        "delivery": "Before our holiday in two months.",
        "contract": "Please explain the finance conditions.",
        "contact": "Email would help me keep a written record.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "close-budi",
      "scene": 3,
      "persona": "科技先锋型",
      "recommendedModel": "Smart E",
      "customer": {
        "name": "Budi",
        "country": "ID",
        "countryName": "印度尼西亚",
        "city": "Jakarta"
      },
      "context": "前序记录：为科技先锋型客户介绍 Smart E，核心优势为驾驶辅助、智能互联和车载娱乐，贴合跨城内通勤并喜欢互联设备。先总结个性化匹配点，再确认购买意愿；清楚说明核对合同、付款和安排交付，礼貌结束接待。具体金额和日期需双方确认。",
      "script": "The Smart E seems to fit my needs. I commute across the city and enjoy connected devices. I value driving assistance, connected controls and in-car entertainment. I would like to move forward if the final terms are clear. Before we agree, please explain the contract, payment arrangements and expected delivery time. I have not signed or paid a deposit yet. Could we confirm the next steps together?",
      "translation": "Smart E 看起来符合我的需要。跨城内通勤并喜欢互联设备，我重视驾驶辅助、智能互联和车载娱乐。如果最终条款清楚，我愿意推进购买。达成共识前，请解释合同、付款安排和预计提车时间。我尚未签约或支付订金。我们能否一起确认后续步骤？",
      "audio": "audio/close-budi.wav",
      "facts": [
        {
          "text": "认为推荐车型符合需求",
          "evidence": "The Smart E seems to fit my needs.",
          "correct": true,
          "id": "close-budi-f0"
        },
        {
          "text": "跨城内通勤并喜欢互联设备",
          "evidence": "I commute across the city and enjoy connected devices.",
          "correct": true,
          "id": "close-budi-f1"
        },
        {
          "text": "希望了解合同、付款和交付",
          "evidence": "Please explain the contract, payment arrangements and expected delivery time.",
          "correct": true,
          "id": "close-budi-f2"
        },
        {
          "text": "尚未签约或支付订金",
          "evidence": "I have not signed or paid a deposit yet.",
          "correct": true,
          "id": "close-budi-f3"
        },
        {
          "text": "已经同意最终合同条款",
          "evidence": "客户表示需先明确最终条款。",
          "correct": false,
          "id": "close-budi-f4"
        },
        {
          "text": "具体提车日期已经确定",
          "evidence": "客户希望了解预计交付时间，未确定日期。",
          "correct": false,
          "id": "close-budi-f5"
        }
      ],
      "topics": [
        {
          "id": "decision",
          "label": "是否准备进入购车流程",
          "groups": [
            [
              "ready",
              "proceed",
              "move forward",
              "decision",
              "purchase"
            ],
            [
              "are you",
              "would you",
              "when",
              "prefer",
              "like"
            ]
          ],
          "example": "Would you be ready to move forward after we review the terms?",
          "status": "open",
          "reply": "Yes, I am ready to continue once we review the written terms.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "payment",
          "label": "偏好的付款安排",
          "groups": [
            [
              "pay",
              "deposit",
              "instalment",
              "installment",
              "financ"
            ],
            [
              "prefer",
              "plan",
              "how",
              "arrange",
              "option",
              "explain",
              "would like"
            ]
          ],
          "example": "How would you prefer to arrange payment?",
          "status": "open",
          "reply": "I would like to understand the deposit first.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "open",
          "reply": "Next month, after my current lease ends.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contract",
          "label": "需解释的合同事项",
          "groups": [
            [
              "contract",
              "agreement",
              "terms",
              "sign"
            ],
            [
              "explain",
              "clarif",
              "question",
              "understand",
              "detail",
              "know"
            ]
          ],
          "example": "Which contract details would you like me to explain?",
          "status": "open",
          "reply": "Please explain what is included in the software package.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contact",
          "label": "后续联系偏好",
          "groups": [
            [
              "contact",
              "call",
              "email",
              "message",
              "reach"
            ],
            [
              "prefer",
              "how",
              "when",
              "best",
              "would like"
            ]
          ],
          "example": "How would you prefer us to contact you?",
          "status": "open",
          "reply": "A message during my lunch break is best.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Clear navigation and reliable phone integration matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About eighty kilometres per day.",
        "passengers": "Usually one person, sometimes two.",
        "charging": "My office has chargers that staff can book.",
        "budget": "Around five hundred million rupiah.",
        "priority": "Clear navigation and reliable phone integration matter most to me.",
        "use": "I commute across the city and enjoy connected devices.",
        "compare": "An electric car with a larger screen but different software.",
        "warranty": "I want to know how software updates relate to battery protection.",
        "payment": "I would like to understand the deposit first.",
        "delivery": "Next month, after my current lease ends.",
        "contract": "Please explain what is included in the software package.",
        "contact": "A message during my lunch break is best.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "close-linh",
      "scene": 3,
      "persona": "商务精英型",
      "recommendedModel": "Comfort E",
      "customer": {
        "name": "Linh",
        "country": "VN",
        "countryName": "越南",
        "city": "Da Nang"
      },
      "context": "前序记录：为商务精英型客户介绍 Comfort E，核心优势为安静座舱、高端座椅和专业形象，贴合拜访客户并有跨城市出行。先总结个性化匹配点，再确认购买意愿；清楚说明核对合同、付款和安排交付，礼貌结束接待。具体金额和日期需双方确认。",
      "script": "The Comfort E seems to fit my needs. I visit clients and sometimes travel between cities. I value a quiet cabin, premium seating and a professional image. I would like to move forward if the final terms are clear. Before we agree, please explain the contract, payment arrangements and expected delivery time. I have not signed or paid a deposit yet. Could we confirm the next steps together?",
      "translation": "Comfort E 看起来符合我的需要。拜访客户并有跨城市出行，我重视安静座舱、高端座椅和专业形象。如果最终条款清楚，我愿意推进购买。达成共识前，请解释合同、付款安排和预计提车时间。我尚未签约或支付订金。我们能否一起确认后续步骤？",
      "audio": "audio/close-linh.wav",
      "facts": [
        {
          "text": "认为推荐车型符合需求",
          "evidence": "The Comfort E seems to fit my needs.",
          "correct": true,
          "id": "close-linh-f0"
        },
        {
          "text": "拜访客户并有跨城市出行",
          "evidence": "I visit clients and sometimes travel between cities.",
          "correct": true,
          "id": "close-linh-f1"
        },
        {
          "text": "希望了解合同、付款和交付",
          "evidence": "Please explain the contract, payment arrangements and expected delivery time.",
          "correct": true,
          "id": "close-linh-f2"
        },
        {
          "text": "尚未签约或支付订金",
          "evidence": "I have not signed or paid a deposit yet.",
          "correct": true,
          "id": "close-linh-f3"
        },
        {
          "text": "已经同意最终合同条款",
          "evidence": "客户表示需先明确最终条款。",
          "correct": false,
          "id": "close-linh-f4"
        },
        {
          "text": "具体提车日期已经确定",
          "evidence": "客户希望了解预计交付时间，未确定日期。",
          "correct": false,
          "id": "close-linh-f5"
        }
      ],
      "topics": [
        {
          "id": "decision",
          "label": "是否准备进入购车流程",
          "groups": [
            [
              "ready",
              "proceed",
              "move forward",
              "decision",
              "purchase"
            ],
            [
              "are you",
              "would you",
              "when",
              "prefer",
              "like"
            ]
          ],
          "example": "Would you be ready to move forward after we review the terms?",
          "status": "open",
          "reply": "Yes, I am ready to continue once we review the written terms.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "payment",
          "label": "偏好的付款安排",
          "groups": [
            [
              "pay",
              "deposit",
              "instalment",
              "installment",
              "financ"
            ],
            [
              "prefer",
              "plan",
              "how",
              "arrange",
              "option",
              "explain",
              "would like"
            ]
          ],
          "example": "How would you prefer to arrange payment?",
          "status": "open",
          "reply": "I am considering a company purchase with full payment.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "open",
          "reply": "Within six weeks.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contract",
          "label": "需解释的合同事项",
          "groups": [
            [
              "contract",
              "agreement",
              "terms",
              "sign"
            ],
            [
              "explain",
              "clarif",
              "question",
              "understand",
              "detail",
              "know"
            ]
          ],
          "example": "Which contract details would you like me to explain?",
          "status": "open",
          "reply": "I need the service coverage and delivery conditions explained.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contact",
          "label": "后续联系偏好",
          "groups": [
            [
              "contact",
              "call",
              "email",
              "message",
              "reach"
            ],
            [
              "prefer",
              "how",
              "when",
              "best",
              "would like"
            ]
          ],
          "example": "How would you prefer us to contact you?",
          "status": "open",
          "reply": "Please email the details before calling.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Comfort on long journeys and a professional appearance matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "Around one hundred kilometres on working days.",
        "passengers": "Usually two or three adults.",
        "charging": "There is no home charger, but a public station is near my office.",
        "budget": "Around nine hundred million dong.",
        "priority": "Comfort on long journeys and a professional appearance matter most to me.",
        "use": "I visit clients and sometimes travel between cities.",
        "compare": "A sedan with a lower price but less equipment.",
        "warranty": "I am worried about finding an authorised repair centre when travelling.",
        "payment": "I am considering a company purchase with full payment.",
        "delivery": "Within six weeks.",
        "contract": "I need the service coverage and delivery conditions explained.",
        "contact": "Please email the details before calling.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    },
    {
      "id": "close-miguel",
      "scene": 3,
      "persona": "务实家庭型",
      "recommendedModel": "Family E",
      "customer": {
        "name": "Miguel",
        "country": "PH",
        "countryName": "菲律宾",
        "city": "Cebu"
      },
      "context": "前序记录：为务实家庭型客户介绍 Family E，核心优势为灵活空间、实用续航和综合性价比，贴合接送孩子上学并为小生意送货。先总结个性化匹配点，再确认购买意愿；清楚说明核对合同、付款和安排交付，礼貌结束接待。具体金额和日期需双方确认。",
      "script": "The Family E seems to fit my needs. I take my children to school and make deliveries for my small business. I value a flexible cabin, practical range and overall value. I would like to move forward if the final terms are clear. Before we agree, please explain the contract, payment arrangements and expected delivery time. I have not signed or paid a deposit yet. Could we confirm the next steps together?",
      "translation": "Family E 看起来符合我的需要。接送孩子上学并为小生意送货，我重视灵活空间、实用续航和综合性价比。如果最终条款清楚，我愿意推进购买。达成共识前，请解释合同、付款安排和预计提车时间。我尚未签约或支付订金。我们能否一起确认后续步骤？",
      "audio": "audio/close-miguel.wav",
      "facts": [
        {
          "text": "认为推荐车型符合需求",
          "evidence": "The Family E seems to fit my needs.",
          "correct": true,
          "id": "close-miguel-f0"
        },
        {
          "text": "接送孩子上学并为小生意送货",
          "evidence": "I take my children to school and make deliveries for my small business.",
          "correct": true,
          "id": "close-miguel-f1"
        },
        {
          "text": "希望了解合同、付款和交付",
          "evidence": "Please explain the contract, payment arrangements and expected delivery time.",
          "correct": true,
          "id": "close-miguel-f2"
        },
        {
          "text": "尚未签约或支付订金",
          "evidence": "I have not signed or paid a deposit yet.",
          "correct": true,
          "id": "close-miguel-f3"
        },
        {
          "text": "已经同意最终合同条款",
          "evidence": "客户表示需先明确最终条款。",
          "correct": false,
          "id": "close-miguel-f4"
        },
        {
          "text": "具体提车日期已经确定",
          "evidence": "客户希望了解预计交付时间，未确定日期。",
          "correct": false,
          "id": "close-miguel-f5"
        }
      ],
      "topics": [
        {
          "id": "decision",
          "label": "是否准备进入购车流程",
          "groups": [
            [
              "ready",
              "proceed",
              "move forward",
              "decision",
              "purchase"
            ],
            [
              "are you",
              "would you",
              "when",
              "prefer",
              "like"
            ]
          ],
          "example": "Would you be ready to move forward after we review the terms?",
          "status": "open",
          "reply": "Yes, I am ready to continue once we review the written terms.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "payment",
          "label": "偏好的付款安排",
          "groups": [
            [
              "pay",
              "deposit",
              "instalment",
              "installment",
              "financ"
            ],
            [
              "prefer",
              "plan",
              "how",
              "arrange",
              "option",
              "explain",
              "would like"
            ]
          ],
          "example": "How would you prefer to arrange payment?",
          "status": "open",
          "reply": "I prefer instalments, depending on the final monthly amount.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "delivery",
          "label": "希望的交付时间",
          "groups": [
            [
              "deliver",
              "collect",
              "pick up",
              "receive",
              "take delivery"
            ],
            [
              "when",
              "date",
              "time",
              "soon",
              "week",
              "month"
            ]
          ],
          "example": "When would you like to take delivery?",
          "status": "open",
          "reply": "Before school starts in five weeks.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contract",
          "label": "需解释的合同事项",
          "groups": [
            [
              "contract",
              "agreement",
              "terms",
              "sign"
            ],
            [
              "explain",
              "clarif",
              "question",
              "understand",
              "detail",
              "know"
            ]
          ],
          "example": "Which contract details would you like me to explain?",
          "status": "open",
          "reply": "Please explain the payment schedule and required documents.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "contact",
          "label": "后续联系偏好",
          "groups": [
            [
              "contact",
              "call",
              "email",
              "message",
              "reach"
            ],
            [
              "prefer",
              "how",
              "when",
              "best",
              "would like"
            ]
          ],
          "example": "How would you prefer us to contact you?",
          "status": "open",
          "reply": "A phone call in the early evening is best.",
          "reason": "该信息尚未明确，追问可以推进当前任务。"
        },
        {
          "id": "priority",
          "label": "最重视的配置",
          "groups": [
            [
              "feature",
              "equipment",
              "function",
              "priority",
              "priorities"
            ],
            [
              "important",
              "most",
              "prefer",
              "matter",
              "value",
              "priority",
              "priorities"
            ]
          ],
          "example": "Which features are most important to you?",
          "status": "known",
          "reply": "Low running costs and flexible storage space matter most to me.",
          "reason": "前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。"
        }
      ],
      "replyBank": {
        "distance": "About fifty-five kilometres each day.",
        "passengers": "Four people when I travel with my family.",
        "charging": "I have a parking space and need advice on safe charger installation.",
        "budget": "Around one and a half million pesos.",
        "priority": "Low running costs and flexible storage space matter most to me.",
        "use": "I take my children to school and make deliveries for my small business.",
        "compare": "A petrol vehicle with more storage but higher fuel costs.",
        "warranty": "I want to understand which maintenance requirements affect the warranty.",
        "payment": "I prefer instalments, depending on the final monthly amount.",
        "delivery": "Before school starts in five weeks.",
        "contract": "Please explain the payment schedule and required documents.",
        "contact": "A phone call in the early evening is best.",
        "service": "I would like clear repair support and an authorised service contact.",
        "testdrive": "I would like to experience the features that matter to my daily use.",
        "assist": "I would like help with parking and safer driving on busy roads.",
        "entertainment": "I would like clear navigation, music and phone integration.",
        "comfort": "I value quiet travel and supportive seats on longer journeys.",
        "decision": "Yes, I am ready to continue once we review the written terms.",
        "value": "I compare the total cost, useful features and service support.",
        "price": "I would need to see the confirmed written price and the full cost breakdown before deciding.",
        "range": "Could you show me the official range information and explain how it fits my driving routine?"
      }
    }
  ]
};
