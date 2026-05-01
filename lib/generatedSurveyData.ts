// Generated from proj1/questionare/*.md by scripts/generate-survey-data.mjs.
// Do not edit manually unless the questionnaire source is unavailable.

import type { SurveyQuestionDefinition } from "./surveyTypes";

export const generatedQuestionDefinitions = [
  {
    "q": 1,
    "name": "shell_form",
    "type": "radiogroup",
    "isRequired": true,
    "title": {
      "default": "Q1. Select the shell form of this obfuscation identity",
      "zh-cn": "Q1. 选择这个混淆身份的外壳形态"
    },
    "choices": [
      {
        "value": "Real self",
        "text": {
          "default": "Real self",
          "zh-cn": "真实自我"
        }
      },
      {
        "value": "Substitute",
        "text": {
          "default": "Substitute",
          "zh-cn": "替身"
        }
      },
      {
        "value": "Shadow",
        "text": {
          "default": "Shadow",
          "zh-cn": "影子"
        }
      },
      {
        "value": "Character",
        "text": {
          "default": "Character",
          "zh-cn": "角色"
        }
      },
      {
        "value": "Error archive",
        "text": {
          "default": "Error archive",
          "zh-cn": "错误档案"
        }
      },
      {
        "value": "Dream figure",
        "text": {
          "default": "Dream figure",
          "zh-cn": "梦中人物"
        }
      },
      {
        "value": "Future version",
        "text": {
          "default": "Future version",
          "zh-cn": "未来版本"
        }
      },
      {
        "value": "Past version",
        "text": {
          "default": "Past version",
          "zh-cn": "过去版本"
        }
      },
      {
        "value": "Machine-generated entity",
        "text": {
          "default": "Machine-generated entity",
          "zh-cn": "机器生成的实体"
        }
      },
      {
        "value": "Parallel-world resident",
        "text": {
          "default": "Parallel-world resident",
          "zh-cn": "平行世界居民"
        }
      },
      {
        "value": "Non-human identity",
        "text": {
          "default": "Non-human identity",
          "zh-cn": "非人类身份"
        }
      },
      {
        "value": "Multiple-identity cluster",
        "text": {
          "default": "Multiple-identity cluster",
          "zh-cn": "多重身份集群"
        }
      },
      {
        "value": "Unnameable",
        "text": {
          "default": "Unnameable",
          "zh-cn": "无法命名"
        }
      }
    ],
    "showOtherItem": true,
    "otherText": {
      "default": "Other",
      "zh-cn": "其他"
    }
  },
  {
    "q": 2,
    "name": "places",
    "type": "checkbox",
    "maxSelectedChoices": 6,
    "title": {
      "default": "Q2. Select the places where this identity has appeared",
      "zh-cn": "Q2. 选择这个身份曾经出现的场所"
    },
    "description": {
      "default": "Select up to 6 options.",
      "zh-cn": "最多选择 6 项。"
    },
    "choices": [
      {
        "value": "Internet",
        "text": {
          "default": "Internet",
          "zh-cn": "网络"
        }
      },
      {
        "value": "City",
        "text": {
          "default": "City",
          "zh-cn": "城市"
        }
      },
      {
        "value": "Home",
        "text": {
          "default": "Home",
          "zh-cn": "家庭"
        }
      },
      {
        "value": "School",
        "text": {
          "default": "School",
          "zh-cn": "学校"
        }
      },
      {
        "value": "Workplace",
        "text": {
          "default": "Workplace",
          "zh-cn": "工作场所"
        }
      },
      {
        "value": "Game",
        "text": {
          "default": "Game",
          "zh-cn": "游戏"
        }
      },
      {
        "value": "Dream",
        "text": {
          "default": "Dream",
          "zh-cn": "梦境"
        }
      },
      {
        "value": "Border",
        "text": {
          "default": "Border",
          "zh-cn": "边境"
        }
      },
      {
        "value": "Archive",
        "text": {
          "default": "Archive",
          "zh-cn": "档案馆"
        }
      },
      {
        "value": "Hospital",
        "text": {
          "default": "Hospital",
          "zh-cn": "医院"
        }
      },
      {
        "value": "Shopping mall",
        "text": {
          "default": "Shopping mall",
          "zh-cn": "商场"
        }
      },
      {
        "value": "Transport system",
        "text": {
          "default": "Transport system",
          "zh-cn": "交通系统"
        }
      },
      {
        "value": "Social media platform",
        "text": {
          "default": "Social media platform",
          "zh-cn": "社交媒体平台"
        }
      },
      {
        "value": "Database",
        "text": {
          "default": "Database",
          "zh-cn": "数据库"
        }
      },
      {
        "value": "Natural environment",
        "text": {
          "default": "Natural environment",
          "zh-cn": "自然环境"
        }
      },
      {
        "value": "Ruin",
        "text": {
          "default": "Ruin",
          "zh-cn": "废墟"
        }
      },
      {
        "value": "Future world",
        "text": {
          "default": "Future world",
          "zh-cn": "未来世界"
        }
      },
      {
        "value": "No fixed place",
        "text": {
          "default": "No fixed place",
          "zh-cn": "无固定地点"
        }
      }
    ],
    "showOtherItem": true,
    "otherText": {
      "default": "Other",
      "zh-cn": "其他"
    }
  },
  {
    "q": 3,
    "name": "expression_formats",
    "type": "checkbox",
    "maxSelectedChoices": 5,
    "title": {
      "default": "Q3. Select the expression formats used by this identity",
      "zh-cn": "Q3. 选择这个身份使用的表达方式"
    },
    "description": {
      "default": "Select up to 5 options.",
      "zh-cn": "最多选择 5 项。"
    },
    "choices": [
      {
        "value": "Official form",
        "text": {
          "default": "Official form",
          "zh-cn": "官方表格"
        }
      },
      {
        "value": "Private diary",
        "text": {
          "default": "Private diary",
          "zh-cn": "私人日记"
        }
      },
      {
        "value": "Social media bio",
        "text": {
          "default": "Social media bio",
          "zh-cn": "社交媒体简介"
        }
      },
      {
        "value": "Poem",
        "text": {
          "default": "Poem",
          "zh-cn": "诗歌"
        }
      },
      {
        "value": "Testimony",
        "text": {
          "default": "Testimony",
          "zh-cn": "证词"
        }
      },
      {
        "value": "Advertising profile",
        "text": {
          "default": "Advertising profile",
          "zh-cn": "广告画像"
        }
      },
      {
        "value": "Divination result",
        "text": {
          "default": "Divination result",
          "zh-cn": "占卜结果"
        }
      },
      {
        "value": "Medical record",
        "text": {
          "default": "Medical record",
          "zh-cn": "病历"
        }
      },
      {
        "value": "Resume",
        "text": {
          "default": "Resume",
          "zh-cn": "简历"
        }
      },
      {
        "value": "Chat log",
        "text": {
          "default": "Chat log",
          "zh-cn": "聊天记录"
        }
      },
      {
        "value": "System error",
        "text": {
          "default": "System error",
          "zh-cn": "系统错误"
        }
      },
      {
        "value": "Legend",
        "text": {
          "default": "Legend",
          "zh-cn": "传说"
        }
      },
      {
        "value": "Species description",
        "text": {
          "default": "Species description",
          "zh-cn": "物种描述"
        }
      },
      {
        "value": "Museum label",
        "text": {
          "default": "Museum label",
          "zh-cn": "博物馆标签"
        }
      },
      {
        "value": "Junk file",
        "text": {
          "default": "Junk file",
          "zh-cn": "垃圾文件"
        }
      },
      {
        "value": "Untitled file",
        "text": {
          "default": "Untitled file",
          "zh-cn": "未命名文件"
        }
      }
    ],
    "showOtherItem": true,
    "otherText": {
      "default": "Other",
      "zh-cn": "其他"
    }
  },
  {
    "q": 4,
    "name": "material_sources",
    "type": "checkbox",
    "maxSelectedChoices": 8,
    "title": {
      "default": "Q4. Select the material sources of this identity",
      "zh-cn": "Q4. 选择这个身份的材料来源"
    },
    "description": {
      "default": "Select up to 8 options.",
      "zh-cn": "最多选择 8 项。"
    },
    "choices": [
      {
        "value": "Real memory",
        "text": {
          "default": "Real memory",
          "zh-cn": "真实记忆"
        }
      },
      {
        "value": "False memory",
        "text": {
          "default": "False memory",
          "zh-cn": "虚假记忆"
        }
      },
      {
        "value": "Dream",
        "text": {
          "default": "Dream",
          "zh-cn": "梦境"
        }
      },
      {
        "value": "News",
        "text": {
          "default": "News",
          "zh-cn": "新闻"
        }
      },
      {
        "value": "Internet meme",
        "text": {
          "default": "Internet meme",
          "zh-cn": "网络热梗"
        }
      },
      {
        "value": "Private code",
        "text": {
          "default": "Private code",
          "zh-cn": "私人暗号"
        }
      },
      {
        "value": "Family legend",
        "text": {
          "default": "Family legend",
          "zh-cn": "家族传说"
        }
      },
      {
        "value": "Shopping preference",
        "text": {
          "default": "Shopping preference",
          "zh-cn": "购物偏好"
        }
      },
      {
        "value": "Location trace",
        "text": {
          "default": "Location trace",
          "zh-cn": "位置痕迹"
        }
      },
      {
        "value": "Chat habit",
        "text": {
          "default": "Chat habit",
          "zh-cn": "聊天习惯"
        }
      },
      {
        "value": "Search history",
        "text": {
          "default": "Search history",
          "zh-cn": "搜索记录"
        }
      },
      {
        "value": "Color",
        "text": {
          "default": "Color",
          "zh-cn": "颜色"
        }
      },
      {
        "value": "Number",
        "text": {
          "default": "Number",
          "zh-cn": "数字"
        }
      },
      {
        "value": "Lyric-like fragment",
        "text": {
          "default": "Lyric-like fragment",
          "zh-cn": "歌词感片段"
        }
      },
      {
        "value": "Religious / mythological element",
        "text": {
          "default": "Religious / mythological element",
          "zh-cn": "宗教 / 神话元素"
        }
      },
      {
        "value": "Game character",
        "text": {
          "default": "Game character",
          "zh-cn": "游戏角色"
        }
      },
      {
        "value": "AI-generated text",
        "text": {
          "default": "AI-generated text",
          "zh-cn": "AI生成的文本"
        }
      },
      {
        "value": "Random words",
        "text": {
          "default": "Random words",
          "zh-cn": "随机词汇"
        }
      },
      {
        "value": "Non-human material",
        "text": {
          "default": "Non-human material",
          "zh-cn": "非人类材料"
        }
      }
    ],
    "showOtherItem": true,
    "otherText": {
      "default": "Other",
      "zh-cn": "其他"
    }
  },
  {
    "q": 5,
    "name": "social_role_tags",
    "type": "checkbox",
    "minSelectedChoices": 3,
    "maxSelectedChoices": 6,
    "title": {
      "default": "Q5. Social Role Tags",
      "zh-cn": "Q5. 社会角色标签"
    },
    "description": {
      "default": "Select 3-6 options.",
      "zh-cn": "请选择 3-6 项。"
    },
    "choices": [
      {
        "value": "Student",
        "text": {
          "default": "Student",
          "zh-cn": "学生"
        }
      },
      {
        "value": "Researcher",
        "text": {
          "default": "Researcher",
          "zh-cn": "研究者"
        }
      },
      {
        "value": "Temporary worker",
        "text": {
          "default": "Temporary worker",
          "zh-cn": "临时工"
        }
      },
      {
        "value": "Freelancer",
        "text": {
          "default": "Freelancer",
          "zh-cn": "自由职业者"
        }
      },
      {
        "value": "Unemployed person",
        "text": {
          "default": "Unemployed person",
          "zh-cn": "失业者"
        }
      },
      {
        "value": "Caregiver",
        "text": {
          "default": "Caregiver",
          "zh-cn": "照护者"
        }
      },
      {
        "value": "Parent",
        "text": {
          "default": "Parent",
          "zh-cn": "父母"
        }
      },
      {
        "value": "Person living alone",
        "text": {
          "default": "Person living alone",
          "zh-cn": "独居者"
        }
      },
      {
        "value": "Housemate",
        "text": {
          "default": "Housemate",
          "zh-cn": "合租者"
        }
      },
      {
        "value": "Commuter",
        "text": {
          "default": "Commuter",
          "zh-cn": "通勤者"
        }
      },
      {
        "value": "New resident",
        "text": {
          "default": "New resident",
          "zh-cn": "新住民"
        }
      },
      {
        "value": "Local person",
        "text": {
          "default": "Local person",
          "zh-cn": "本地人"
        }
      },
      {
        "value": "Outsider",
        "text": {
          "default": "Outsider",
          "zh-cn": "外来者"
        }
      },
      {
        "value": "Traveler",
        "text": {
          "default": "Traveler",
          "zh-cn": "旅行者"
        }
      },
      {
        "value": "Drifter",
        "text": {
          "default": "Drifter",
          "zh-cn": "漂泊者"
        }
      },
      {
        "value": "Tenant",
        "text": {
          "default": "Tenant",
          "zh-cn": "房客"
        }
      },
      {
        "value": "Host",
        "text": {
          "default": "Host",
          "zh-cn": "主人"
        }
      },
      {
        "value": "Regular visitor",
        "text": {
          "default": "Regular visitor",
          "zh-cn": "常客"
        }
      },
      {
        "value": "Guest",
        "text": {
          "default": "Guest",
          "zh-cn": "访客"
        }
      },
      {
        "value": "Unknown person",
        "text": {
          "default": "Unknown person",
          "zh-cn": "不明身份者"
        }
      },
      {
        "value": "Unclassifiable person",
        "text": {
          "default": "Unclassifiable person",
          "zh-cn": "无法归类者"
        }
      },
      {
        "value": "Witness",
        "text": {
          "default": "Witness",
          "zh-cn": "目击者"
        }
      },
      {
        "value": "Observer",
        "text": {
          "default": "Observer",
          "zh-cn": "观察者"
        }
      },
      {
        "value": "Recorded subject",
        "text": {
          "default": "Recorded subject",
          "zh-cn": "被记录的对象"
        }
      },
      {
        "value": "Forgotten person",
        "text": {
          "default": "Forgotten person",
          "zh-cn": "被遗忘的人"
        }
      },
      {
        "value": "Temporary resident",
        "text": {
          "default": "Temporary resident",
          "zh-cn": "暂住者"
        }
      },
      {
        "value": "Marginal member",
        "text": {
          "default": "Marginal member",
          "zh-cn": "边缘成员"
        }
      },
      {
        "value": "Anonymous user",
        "text": {
          "default": "Anonymous user",
          "zh-cn": "匿名用户"
        }
      },
      {
        "value": "Passerby",
        "text": {
          "default": "Passerby",
          "zh-cn": "路人"
        }
      },
      {
        "value": "Archive object",
        "text": {
          "default": "Archive object",
          "zh-cn": "归档对象"
        }
      }
    ],
    "showOtherItem": true,
    "otherText": {
      "default": "Other",
      "zh-cn": "其他"
    }
  },
  {
    "q": 6,
    "name": "spatial_tags",
    "type": "checkbox",
    "minSelectedChoices": 3,
    "maxSelectedChoices": 6,
    "title": {
      "default": "Q6. Spatial Tags",
      "zh-cn": "Q6. 空间标签"
    },
    "description": {
      "default": "Select 3-6 options.",
      "zh-cn": "请选择 3-6 项。"
    },
    "choices": [
      {
        "value": "City center",
        "text": {
          "default": "City center",
          "zh-cn": "城市中心"
        }
      },
      {
        "value": "Urban edge",
        "text": {
          "default": "Urban edge",
          "zh-cn": "城市边缘"
        }
      },
      {
        "value": "Suburb",
        "text": {
          "default": "Suburb",
          "zh-cn": "郊区"
        }
      },
      {
        "value": "County town",
        "text": {
          "default": "County town",
          "zh-cn": "县城"
        }
      },
      {
        "value": "Village",
        "text": {
          "default": "Village",
          "zh-cn": "村庄"
        }
      },
      {
        "value": "Seaside",
        "text": {
          "default": "Seaside",
          "zh-cn": "海边"
        }
      },
      {
        "value": "Mountain area",
        "text": {
          "default": "Mountain area",
          "zh-cn": "山区"
        }
      },
      {
        "value": "Border",
        "text": {
          "default": "Border",
          "zh-cn": "边境"
        }
      },
      {
        "value": "Subway",
        "text": {
          "default": "Subway",
          "zh-cn": "地铁"
        }
      },
      {
        "value": "Airport",
        "text": {
          "default": "Airport",
          "zh-cn": "机场"
        }
      },
      {
        "value": "Office building",
        "text": {
          "default": "Office building",
          "zh-cn": "写字楼"
        }
      },
      {
        "value": "Shopping mall",
        "text": {
          "default": "Shopping mall",
          "zh-cn": "商场"
        }
      },
      {
        "value": "School",
        "text": {
          "default": "School",
          "zh-cn": "学校"
        }
      },
      {
        "value": "Hospital",
        "text": {
          "default": "Hospital",
          "zh-cn": "医院"
        }
      },
      {
        "value": "Family home",
        "text": {
          "default": "Family home",
          "zh-cn": "家庭住宅"
        }
      },
      {
        "value": "Rental room",
        "text": {
          "default": "Rental room",
          "zh-cn": "出租屋"
        }
      },
      {
        "value": "Dormitory",
        "text": {
          "default": "Dormitory",
          "zh-cn": "宿舍"
        }
      },
      {
        "value": "Café",
        "text": {
          "default": "Café",
          "zh-cn": "咖啡馆"
        }
      },
      {
        "value": "Convenience store",
        "text": {
          "default": "Convenience store",
          "zh-cn": "便利店"
        }
      },
      {
        "value": "Library",
        "text": {
          "default": "Library",
          "zh-cn": "图书馆"
        }
      },
      {
        "value": "Data center",
        "text": {
          "default": "Data center",
          "zh-cn": "数据中心"
        }
      },
      {
        "value": "Social media platform",
        "text": {
          "default": "Social media platform",
          "zh-cn": "社交媒体平台"
        }
      },
      {
        "value": "Game world",
        "text": {
          "default": "Game world",
          "zh-cn": "游戏世界"
        }
      },
      {
        "value": "Forest",
        "text": {
          "default": "Forest",
          "zh-cn": "森林"
        }
      },
      {
        "value": "River",
        "text": {
          "default": "River",
          "zh-cn": "河流"
        }
      },
      {
        "value": "Ruin",
        "text": {
          "default": "Ruin",
          "zh-cn": "废墟"
        }
      },
      {
        "value": "Museum",
        "text": {
          "default": "Museum",
          "zh-cn": "博物馆"
        }
      },
      {
        "value": "Basement",
        "text": {
          "default": "Basement",
          "zh-cn": "地下室"
        }
      },
      {
        "value": "Rooftop",
        "text": {
          "default": "Rooftop",
          "zh-cn": "屋顶"
        }
      },
      {
        "value": "No fixed place",
        "text": {
          "default": "No fixed place",
          "zh-cn": "无固定地点"
        }
      }
    ],
    "showOtherItem": true,
    "otherText": {
      "default": "Other",
      "zh-cn": "其他"
    }
  },
  {
    "q": 7,
    "name": "time_era_tags",
    "type": "checkbox",
    "minSelectedChoices": 3,
    "maxSelectedChoices": 6,
    "title": {
      "default": "Q7. Time / Era Tags",
      "zh-cn": "Q7. 时间 / 年代标签"
    },
    "description": {
      "default": "Select 3-6 options.",
      "zh-cn": "请选择 3-6 项。"
    },
    "choices": [
      {
        "value": "Ancient time",
        "text": {
          "default": "Ancient time",
          "zh-cn": "古代"
        }
      },
      {
        "value": "Mythic age",
        "text": {
          "default": "Mythic age",
          "zh-cn": "神话时代"
        }
      },
      {
        "value": "Medieval period",
        "text": {
          "default": "Medieval period",
          "zh-cn": "中世纪"
        }
      },
      {
        "value": "Industrial age",
        "text": {
          "default": "Industrial age",
          "zh-cn": "工业时代"
        }
      },
      {
        "value": "Early 20th century",
        "text": {
          "default": "Early 20th century",
          "zh-cn": "20世纪初"
        }
      },
      {
        "value": "1920s",
        "text": {
          "default": "1920s",
          "zh-cn": "1920年代"
        }
      },
      {
        "value": "1950s",
        "text": {
          "default": "1950s",
          "zh-cn": "1950年代"
        }
      },
      {
        "value": "1960s",
        "text": {
          "default": "1960s",
          "zh-cn": "1960年代"
        }
      },
      {
        "value": "1970s",
        "text": {
          "default": "1970s",
          "zh-cn": "1970年代"
        }
      },
      {
        "value": "1980s",
        "text": {
          "default": "1980s",
          "zh-cn": "1980年代"
        }
      },
      {
        "value": "1990s",
        "text": {
          "default": "1990s",
          "zh-cn": "1990年代"
        }
      },
      {
        "value": "Millennium",
        "text": {
          "default": "Millennium",
          "zh-cn": "千禧年"
        }
      },
      {
        "value": "2010s",
        "text": {
          "default": "2010s",
          "zh-cn": "2010年代"
        }
      },
      {
        "value": "2020s",
        "text": {
          "default": "2020s",
          "zh-cn": "2020年代"
        }
      },
      {
        "value": "Near future",
        "text": {
          "default": "Near future",
          "zh-cn": "近未来"
        }
      },
      {
        "value": "Distant future",
        "text": {
          "default": "Distant future",
          "zh-cn": "远未来"
        }
      },
      {
        "value": "After the apocalypse",
        "text": {
          "default": "After the apocalypse",
          "zh-cn": "末日之后"
        }
      },
      {
        "value": "Looping time",
        "text": {
          "default": "Looping time",
          "zh-cn": "循环的时间"
        }
      },
      {
        "value": "Paused time",
        "text": {
          "default": "Paused time",
          "zh-cn": "暂停的时间"
        }
      },
      {
        "value": "Wrong era",
        "text": {
          "default": "Wrong era",
          "zh-cn": "错误的年代"
        }
      },
      {
        "value": "Expired future",
        "text": {
          "default": "Expired future",
          "zh-cn": "过期的未来"
        }
      },
      {
        "value": "Retro future",
        "text": {
          "default": "Retro future",
          "zh-cn": "复古未来"
        }
      },
      {
        "value": "Parallel timeline",
        "text": {
          "default": "Parallel timeline",
          "zh-cn": "平行时间线"
        }
      },
      {
        "value": "Active at dawn",
        "text": {
          "default": "Active at dawn",
          "zh-cn": "凌晨活跃"
        }
      },
      {
        "value": "Nocturnal",
        "text": {
          "default": "Nocturnal",
          "zh-cn": "夜行动物"
        }
      },
      {
        "value": "Weekend appearance",
        "text": {
          "default": "Weekend appearance",
          "zh-cn": "周末出现"
        }
      },
      {
        "value": "Periodic disappearance",
        "text": {
          "default": "Periodic disappearance",
          "zh-cn": "周期性消失"
        }
      },
      {
        "value": "Long silence",
        "text": {
          "default": "Long silence",
          "zh-cn": "长时间沉默"
        }
      },
      {
        "value": "High repetition",
        "text": {
          "default": "High repetition",
          "zh-cn": "高频重复"
        }
      },
      {
        "value": "Seasonal appearance",
        "text": {
          "default": "Seasonal appearance",
          "zh-cn": "季节性出现"
        }
      },
      {
        "value": "Time disorder",
        "text": {
          "default": "Time disorder",
          "zh-cn": "时间错乱"
        }
      }
    ],
    "showOtherItem": true,
    "otherText": {
      "default": "Other",
      "zh-cn": "其他"
    }
  },
  {
    "q": 8,
    "name": "platform_behavior_tags",
    "type": "checkbox",
    "minSelectedChoices": 3,
    "maxSelectedChoices": 6,
    "title": {
      "default": "Q8. Platform Behavior / Consumption Tags",
      "zh-cn": "Q8. 平台行为 / 消费标签"
    },
    "description": {
      "default": "Select 3-6 options.",
      "zh-cn": "请选择 3-6 项。"
    },
    "choices": [
      {
        "value": "Impulse buyer",
        "text": {
          "default": "Impulse buyer",
          "zh-cn": "冲动消费者"
        }
      },
      {
        "value": "Price comparer",
        "text": {
          "default": "Price comparer",
          "zh-cn": "比价者"
        }
      },
      {
        "value": "Hoarder",
        "text": {
          "default": "Hoarder",
          "zh-cn": "囤货狂"
        }
      },
      {
        "value": "Minimalist",
        "text": {
          "default": "Minimalist",
          "zh-cn": "极简主义者"
        }
      },
      {
        "value": "Brand loyalist",
        "text": {
          "default": "Brand loyalist",
          "zh-cn": "品牌忠诚者"
        }
      },
      {
        "value": "High return rate",
        "text": {
          "default": "High return rate",
          "zh-cn": "高退货率"
        }
      },
      {
        "value": "Late-night shopper",
        "text": {
          "default": "Late-night shopper",
          "zh-cn": "深夜购物者"
        }
      },
      {
        "value": "Browses without buying",
        "text": {
          "default": "Browses without buying",
          "zh-cn": "只看不买"
        }
      },
      {
        "value": "Low-frequency high-price consumer",
        "text": {
          "default": "Low-frequency high-price consumer",
          "zh-cn": "低频高价消费者"
        }
      },
      {
        "value": "High-frequency low-price consumer",
        "text": {
          "default": "High-frequency low-price consumer",
          "zh-cn": "高频低价消费者"
        }
      },
      {
        "value": "Second-hand preference",
        "text": {
          "default": "Second-hand preference",
          "zh-cn": "二手偏好"
        }
      },
      {
        "value": "Digital subscriber",
        "text": {
          "default": "Digital subscriber",
          "zh-cn": "数字订阅用户"
        }
      },
      {
        "value": "Algorithm follower",
        "text": {
          "default": "Algorithm follower",
          "zh-cn": "算法追随者"
        }
      },
      {
        "value": "Anti-recommendation user",
        "text": {
          "default": "Anti-recommendation user",
          "zh-cn": "反推荐用户"
        }
      },
      {
        "value": "Collector",
        "text": {
          "default": "Collector",
          "zh-cn": "收藏家"
        }
      },
      {
        "value": "Jumping browser",
        "text": {
          "default": "Jumping browser",
          "zh-cn": "跳跃式浏览者"
        }
      },
      {
        "value": "Ad avoider",
        "text": {
          "default": "Ad avoider",
          "zh-cn": "广告回避者"
        }
      },
      {
        "value": "Membership user",
        "text": {
          "default": "Membership user",
          "zh-cn": "会员用户"
        }
      },
      {
        "value": "Anonymous browser",
        "text": {
          "default": "Anonymous browser",
          "zh-cn": "匿名浏览者"
        }
      },
      {
        "value": "Platform nomad",
        "text": {
          "default": "Platform nomad",
          "zh-cn": "平台游牧民"
        }
      },
      {
        "value": "Multiple-account switcher",
        "text": {
          "default": "Multiple-account switcher",
          "zh-cn": "多账号切换者"
        }
      },
      {
        "value": "Deletes records",
        "text": {
          "default": "Deletes records",
          "zh-cn": "删除记录者"
        }
      },
      {
        "value": "Saves screenshots",
        "text": {
          "default": "Saves screenshots",
          "zh-cn": "保存截图者"
        }
      },
      {
        "value": "Long-term lurker",
        "text": {
          "default": "Long-term lurker",
          "zh-cn": "长期潜水者"
        }
      },
      {
        "value": "Disappears after browsing",
        "text": {
          "default": "Disappears after browsing",
          "zh-cn": "浏览后消失"
        }
      }
    ],
    "showOtherItem": true,
    "otherText": {
      "default": "Other",
      "zh-cn": "其他"
    }
  },
  {
    "q": 9,
    "name": "emotion_personality_tags",
    "type": "checkbox",
    "minSelectedChoices": 4,
    "maxSelectedChoices": 7,
    "title": {
      "default": "Q9. Emotion / Personality Tags",
      "zh-cn": "Q9. 情绪 / 人格标签"
    },
    "description": {
      "default": "Select 4-7 options.",
      "zh-cn": "请选择 4-7 项。"
    },
    "choices": [
      {
        "value": "Calm",
        "text": {
          "default": "Calm",
          "zh-cn": "冷静"
        }
      },
      {
        "value": "Anxious",
        "text": {
          "default": "Anxious",
          "zh-cn": "焦虑"
        }
      },
      {
        "value": "Warm",
        "text": {
          "default": "Warm",
          "zh-cn": "热情"
        }
      },
      {
        "value": "Distant",
        "text": {
          "default": "Distant",
          "zh-cn": "疏离"
        }
      },
      {
        "value": "Nostalgic",
        "text": {
          "default": "Nostalgic",
          "zh-cn": "怀旧"
        }
      },
      {
        "value": "Suspicious",
        "text": {
          "default": "Suspicious",
          "zh-cn": "多疑"
        }
      },
      {
        "value": "Gentle",
        "text": {
          "default": "Gentle",
          "zh-cn": "温和"
        }
      },
      {
        "value": "Stubborn",
        "text": {
          "default": "Stubborn",
          "zh-cn": "固执"
        }
      },
      {
        "value": "Easily distracted",
        "text": {
          "default": "Easily distracted",
          "zh-cn": "易分心"
        }
      },
      {
        "value": "Cautious",
        "text": {
          "default": "Cautious",
          "zh-cn": "谨慎"
        }
      },
      {
        "value": "Adventurous",
        "text": {
          "default": "Adventurous",
          "zh-cn": "冒险"
        }
      },
      {
        "value": "Pessimistic",
        "text": {
          "default": "Pessimistic",
          "zh-cn": "悲观"
        }
      },
      {
        "value": "Optimistic",
        "text": {
          "default": "Optimistic",
          "zh-cn": "乐观"
        }
      },
      {
        "value": "Defensive",
        "text": {
          "default": "Defensive",
          "zh-cn": "防御性强"
        }
      },
      {
        "value": "Highly sensitive",
        "text": {
          "default": "Highly sensitive",
          "zh-cn": "高度敏感"
        }
      },
      {
        "value": "Socially avoidant",
        "text": {
          "default": "Socially avoidant",
          "zh-cn": "社交回避"
        }
      },
      {
        "value": "Highly expressive",
        "text": {
          "default": "Highly expressive",
          "zh-cn": "高度表达欲"
        }
      },
      {
        "value": "Silent",
        "text": {
          "default": "Silent",
          "zh-cn": "沉默"
        }
      },
      {
        "value": "Ironic",
        "text": {
          "default": "Ironic",
          "zh-cn": "反讽"
        }
      },
      {
        "value": "Relaxed",
        "text": {
          "default": "Relaxed",
          "zh-cn": "轻松"
        }
      },
      {
        "value": "Alert",
        "text": {
          "default": "Alert",
          "zh-cn": "警惕"
        }
      },
      {
        "value": "Hesitant",
        "text": {
          "default": "Hesitant",
          "zh-cn": "犹豫"
        }
      },
      {
        "value": "Impulsive",
        "text": {
          "default": "Impulsive",
          "zh-cn": "冲动"
        }
      },
      {
        "value": "Hard to determine",
        "text": {
          "default": "Hard to determine",
          "zh-cn": "难以判断"
        }
      },
      {
        "value": "Tired",
        "text": {
          "default": "Tired",
          "zh-cn": "疲惫"
        }
      },
      {
        "value": "Excited",
        "text": {
          "default": "Excited",
          "zh-cn": "兴奋"
        }
      },
      {
        "value": "Restrained",
        "text": {
          "default": "Restrained",
          "zh-cn": "克制"
        }
      },
      {
        "value": "Speechless",
        "text": {
          "default": "Speechless",
          "zh-cn": "无言"
        }
      }
    ],
    "showOtherItem": true,
    "otherText": {
      "default": "Other",
      "zh-cn": "其他"
    }
  },
  {
    "q": 10,
    "name": "relationship_tags",
    "type": "checkbox",
    "minSelectedChoices": 3,
    "maxSelectedChoices": 6,
    "title": {
      "default": "Q10. Relationship Tags",
      "zh-cn": "Q10. 关系标签"
    },
    "description": {
      "default": "Select 3-6 options.",
      "zh-cn": "请选择 3-6 项。"
    },
    "choices": [
      {
        "value": "Solitary person",
        "text": {
          "default": "Solitary person",
          "zh-cn": "独处者"
        }
      },
      {
        "value": "Family-oriented",
        "text": {
          "default": "Family-oriented",
          "zh-cn": "家庭导向"
        }
      },
      {
        "value": "In an intimate relationship",
        "text": {
          "default": "In an intimate relationship",
          "zh-cn": "亲密关系中"
        }
      },
      {
        "value": "Long-distance relationship",
        "text": {
          "default": "Long-distance relationship",
          "zh-cn": "远距离关系"
        }
      },
      {
        "value": "Caregiver",
        "text": {
          "default": "Caregiver",
          "zh-cn": "照护者"
        }
      },
      {
        "value": "Cared-for person",
        "text": {
          "default": "Cared-for person",
          "zh-cn": "被照护者"
        }
      },
      {
        "value": "Socially active",
        "text": {
          "default": "Socially active",
          "zh-cn": "社交活跃"
        }
      },
      {
        "value": "Dependent on a small circle",
        "text": {
          "default": "Dependent on a small circle",
          "zh-cn": "依赖小圈子"
        }
      },
      {
        "value": "Marginal group member",
        "text": {
          "default": "Marginal group member",
          "zh-cn": "边缘群体成员"
        }
      },
      {
        "value": "Frequently unreachable",
        "text": {
          "default": "Frequently unreachable",
          "zh-cn": "经常失联"
        }
      },
      {
        "value": "Replies frequently",
        "text": {
          "default": "Replies frequently",
          "zh-cn": "回复频繁"
        }
      },
      {
        "value": "Watched",
        "text": {
          "default": "Watched",
          "zh-cn": "被注视"
        }
      },
      {
        "value": "Ignored",
        "text": {
          "default": "Ignored",
          "zh-cn": "被忽视"
        }
      },
      {
        "value": "Anonymous observer",
        "text": {
          "default": "Anonymous observer",
          "zh-cn": "匿名观察者"
        }
      },
      {
        "value": "Community organizer",
        "text": {
          "default": "Community organizer",
          "zh-cn": "社群组织者"
        }
      },
      {
        "value": "Temporary ally",
        "text": {
          "default": "Temporary ally",
          "zh-cn": "临时盟友"
        }
      },
      {
        "value": "Often misunderstands others",
        "text": {
          "default": "Often misunderstands others",
          "zh-cn": "常常误解他人"
        }
      },
      {
        "value": "Often misunderstood",
        "text": {
          "default": "Often misunderstood",
          "zh-cn": "常常被误解"
        }
      },
      {
        "value": "Refuses contact",
        "text": {
          "default": "Refuses contact",
          "zh-cn": "拒绝接触"
        }
      },
      {
        "value": "Waiting to be recognized",
        "text": {
          "default": "Waiting to be recognized",
          "zh-cn": "等待被认出"
        }
      },
      {
        "value": "Lost contact",
        "text": {
          "default": "Lost contact",
          "zh-cn": "失去联系"
        }
      },
      {
        "value": "Keeps distance",
        "text": {
          "default": "Keeps distance",
          "zh-cn": "保持距离"
        }
      },
      {
        "value": "Stranger",
        "text": {
          "default": "Stranger",
          "zh-cn": "陌生人"
        }
      },
      {
        "value": "Old friend",
        "text": {
          "default": "Old friend",
          "zh-cn": "老朋友"
        }
      }
    ],
    "showOtherItem": true,
    "otherText": {
      "default": "Other",
      "zh-cn": "其他"
    }
  },
  {
    "q": 11,
    "name": "aesthetic_cultural_tags",
    "type": "checkbox",
    "minSelectedChoices": 3,
    "maxSelectedChoices": 6,
    "title": {
      "default": "Q11. Aesthetic / Cultural Tags",
      "zh-cn": "Q11. 审美 / 文化标签"
    },
    "description": {
      "default": "Select 3-6 options.",
      "zh-cn": "请选择 3-6 项。"
    },
    "choices": [
      {
        "value": "Pop culture",
        "text": {
          "default": "Pop culture",
          "zh-cn": "流行文化"
        }
      },
      {
        "value": "Anime / manga culture",
        "text": {
          "default": "Anime / manga culture",
          "zh-cn": "动漫/二次元文化"
        }
      },
      {
        "value": "Minimalism",
        "text": {
          "default": "Minimalism",
          "zh-cn": "极简主义"
        }
      },
      {
        "value": "Nostalgia",
        "text": {
          "default": "Nostalgia",
          "zh-cn": "怀旧风"
        }
      },
      {
        "value": "Religious atmosphere",
        "text": {
          "default": "Religious atmosphere",
          "zh-cn": "宗教氛围"
        }
      },
      {
        "value": "Futurism",
        "text": {
          "default": "Futurism",
          "zh-cn": "未来主义"
        }
      },
      {
        "value": "Folklore",
        "text": {
          "default": "Folklore",
          "zh-cn": "民俗"
        }
      },
      {
        "value": "Academic style",
        "text": {
          "default": "Academic style",
          "zh-cn": "学院风"
        }
      },
      {
        "value": "Tech geek",
        "text": {
          "default": "Tech geek",
          "zh-cn": "技术极客"
        }
      },
      {
        "value": "Environmentalism",
        "text": {
          "default": "Environmentalism",
          "zh-cn": "环保主义"
        }
      },
      {
        "value": "Punk",
        "text": {
          "default": "Punk",
          "zh-cn": "朋克"
        }
      },
      {
        "value": "Office style",
        "text": {
          "default": "Office style",
          "zh-cn": "办公室风格"
        }
      },
      {
        "value": "Street-market feeling",
        "text": {
          "default": "Street-market feeling",
          "zh-cn": "地摊感"
        }
      },
      {
        "value": "Luxury",
        "text": {
          "default": "Luxury",
          "zh-cn": "奢华"
        }
      },
      {
        "value": "Lo-fi",
        "text": {
          "default": "Lo-fi",
          "zh-cn": "低保真(Lo-fi)"
        }
      },
      {
        "value": "Handmade feeling",
        "text": {
          "default": "Handmade feeling",
          "zh-cn": "手工感"
        }
      },
      {
        "value": "Archive atmosphere",
        "text": {
          "default": "Archive atmosphere",
          "zh-cn": "档案馆氛围"
        }
      },
      {
        "value": "Algorithmic aesthetics",
        "text": {
          "default": "Algorithmic aesthetics",
          "zh-cn": "算法美学"
        }
      },
      {
        "value": "Fake official style",
        "text": {
          "default": "Fake official style",
          "zh-cn": "伪官方风格"
        }
      },
      {
        "value": "Museum-like",
        "text": {
          "default": "Museum-like",
          "zh-cn": "博物馆式"
        }
      },
      {
        "value": "Biological atlas style",
        "text": {
          "default": "Biological atlas style",
          "zh-cn": "生物图鉴风格"
        }
      },
      {
        "value": "Ruin atmosphere",
        "text": {
          "default": "Ruin atmosphere",
          "zh-cn": "废墟氛围"
        }
      },
      {
        "value": "Game interface style",
        "text": {
          "default": "Game interface style",
          "zh-cn": "游戏界面风格"
        }
      },
      {
        "value": "Unclassifiable",
        "text": {
          "default": "Unclassifiable",
          "zh-cn": "无法分类"
        }
      }
    ],
    "showOtherItem": true,
    "otherText": {
      "default": "Other",
      "zh-cn": "其他"
    }
  },
  {
    "q": 12,
    "name": "system_tags",
    "type": "checkbox",
    "minSelectedChoices": 3,
    "maxSelectedChoices": 6,
    "title": {
      "default": "Q12. System Tags",
      "zh-cn": "Q12. 系统标签"
    },
    "description": {
      "default": "Select 3-6 options.",
      "zh-cn": "请选择 3-6 项。"
    },
    "choices": [
      {
        "value": "Ordinary user",
        "text": {
          "default": "Ordinary user",
          "zh-cn": "普通用户"
        }
      },
      {
        "value": "Active user",
        "text": {
          "default": "Active user",
          "zh-cn": "活跃用户"
        }
      },
      {
        "value": "Low-value user",
        "text": {
          "default": "Low-value user",
          "zh-cn": "低价值用户"
        }
      },
      {
        "value": "High-value user",
        "text": {
          "default": "High-value user",
          "zh-cn": "高价值用户"
        }
      },
      {
        "value": "Abnormal user",
        "text": {
          "default": "Abnormal user",
          "zh-cn": "异常用户"
        }
      },
      {
        "value": "Noise user",
        "text": {
          "default": "Noise user",
          "zh-cn": "噪声用户"
        }
      },
      {
        "value": "Risk user",
        "text": {
          "default": "Risk user",
          "zh-cn": "风险用户"
        }
      },
      {
        "value": "Unstable user",
        "text": {
          "default": "Unstable user",
          "zh-cn": "不稳定用户"
        }
      },
      {
        "value": "Predictable user",
        "text": {
          "default": "Predictable user",
          "zh-cn": "可预测用户"
        }
      },
      {
        "value": "Unpredictable user",
        "text": {
          "default": "Unpredictable user",
          "zh-cn": "不可预测用户"
        }
      },
      {
        "value": "Archivable user",
        "text": {
          "default": "Archivable user",
          "zh-cn": "可归档用户"
        }
      },
      {
        "value": "Insufficient information",
        "text": {
          "default": "Insufficient information",
          "zh-cn": "信息不足"
        }
      },
      {
        "value": "Tag conflict",
        "text": {
          "default": "Tag conflict",
          "zh-cn": "标签冲突"
        }
      },
      {
        "value": "Duplicate archive",
        "text": {
          "default": "Duplicate archive",
          "zh-cn": "重复档案"
        }
      },
      {
        "value": "Identity drift",
        "text": {
          "default": "Identity drift",
          "zh-cn": "身份漂移"
        }
      },
      {
        "value": "Blurred profile",
        "text": {
          "default": "Blurred profile",
          "zh-cn": "画像模糊"
        }
      },
      {
        "value": "Recommendation difficulty",
        "text": {
          "default": "Recommendation difficulty",
          "zh-cn": "推荐困难"
        }
      },
      {
        "value": "Not worth analyzing",
        "text": {
          "default": "Not worth analyzing",
          "zh-cn": "不值得分析"
        }
      },
      {
        "value": "Worth monitoring",
        "text": {
          "default": "Worth monitoring",
          "zh-cn": "值得监控"
        }
      },
      {
        "value": "Cannot determine",
        "text": {
          "default": "Cannot determine",
          "zh-cn": "无法判断"
        }
      },
      {
        "value": "Classification failure",
        "text": {
          "default": "Classification failure",
          "zh-cn": "分类失败"
        }
      },
      {
        "value": "Suspected bot",
        "text": {
          "default": "Suspected bot",
          "zh-cn": "疑似机器人"
        }
      },
      {
        "value": "Suspected human",
        "text": {
          "default": "Suspected human",
          "zh-cn": "疑似真人"
        }
      },
      {
        "value": "Low-confidence data",
        "text": {
          "default": "Low-confidence data",
          "zh-cn": "置信度低的数据"
        }
      },
      {
        "value": "High-noise data",
        "text": {
          "default": "High-noise data",
          "zh-cn": "高噪声数据"
        }
      },
      {
        "value": "Wrong match",
        "text": {
          "default": "Wrong match",
          "zh-cn": "错误匹配"
        }
      },
      {
        "value": "Algorithmic anomaly",
        "text": {
          "default": "Algorithmic anomaly",
          "zh-cn": "算法异常"
        }
      },
      {
        "value": "Outlier",
        "text": {
          "default": "Outlier",
          "zh-cn": "离群值"
        }
      }
    ],
    "showOtherItem": true,
    "otherText": {
      "default": "Other",
      "zh-cn": "其他"
    }
  },
  {
    "q": 13,
    "name": "non_human_tags",
    "type": "checkbox",
    "minSelectedChoices": 6,
    "maxSelectedChoices": 12,
    "title": {
      "default": "Q13. Non-human Tags",
      "zh-cn": "Q13. 非人类标签"
    },
    "description": {
      "default": "Select 6-12 options.",
      "zh-cn": "请选择 6-12 项。"
    },
    "choices": [
      {
        "value": "Cat",
        "text": {
          "default": "Cat",
          "zh-cn": "猫"
        }
      },
      {
        "value": "Dog",
        "text": {
          "default": "Dog",
          "zh-cn": "狗"
        }
      },
      {
        "value": "Bird",
        "text": {
          "default": "Bird",
          "zh-cn": "鸟"
        }
      },
      {
        "value": "Fish",
        "text": {
          "default": "Fish",
          "zh-cn": "鱼"
        }
      },
      {
        "value": "Insect",
        "text": {
          "default": "Insect",
          "zh-cn": "昆虫"
        }
      },
      {
        "value": "Snake",
        "text": {
          "default": "Snake",
          "zh-cn": "蛇"
        }
      },
      {
        "value": "Deer",
        "text": {
          "default": "Deer",
          "zh-cn": "鹿"
        }
      },
      {
        "value": "Fox",
        "text": {
          "default": "Fox",
          "zh-cn": "狐狸"
        }
      },
      {
        "value": "Wolf",
        "text": {
          "default": "Wolf",
          "zh-cn": "狼"
        }
      },
      {
        "value": "Rabbit",
        "text": {
          "default": "Rabbit",
          "zh-cn": "兔子"
        }
      },
      {
        "value": "Horse",
        "text": {
          "default": "Horse",
          "zh-cn": "马"
        }
      },
      {
        "value": "Whale",
        "text": {
          "default": "Whale",
          "zh-cn": "鲸鱼"
        }
      },
      {
        "value": "Octopus",
        "text": {
          "default": "Octopus",
          "zh-cn": "章鱼"
        }
      },
      {
        "value": "Jellyfish",
        "text": {
          "default": "Jellyfish",
          "zh-cn": "水母"
        }
      },
      {
        "value": "Crow",
        "text": {
          "default": "Crow",
          "zh-cn": "乌鸦"
        }
      },
      {
        "value": "Moth",
        "text": {
          "default": "Moth",
          "zh-cn": "飞蛾"
        }
      },
      {
        "value": "Ant",
        "text": {
          "default": "Ant",
          "zh-cn": "蚂蚁"
        }
      },
      {
        "value": "Bee",
        "text": {
          "default": "Bee",
          "zh-cn": "蜜蜂"
        }
      },
      {
        "value": "Fungus",
        "text": {
          "default": "Fungus",
          "zh-cn": "真菌"
        }
      },
      {
        "value": "Moss",
        "text": {
          "default": "Moss",
          "zh-cn": "苔藓"
        }
      },
      {
        "value": "Tree",
        "text": {
          "default": "Tree",
          "zh-cn": "树"
        }
      },
      {
        "value": "Seed",
        "text": {
          "default": "Seed",
          "zh-cn": "种子"
        }
      },
      {
        "value": "Flower",
        "text": {
          "default": "Flower",
          "zh-cn": "花"
        }
      },
      {
        "value": "Grass",
        "text": {
          "default": "Grass",
          "zh-cn": "草"
        }
      },
      {
        "value": "Vine",
        "text": {
          "default": "Vine",
          "zh-cn": "藤蔓"
        }
      },
      {
        "value": "Coral",
        "text": {
          "default": "Coral",
          "zh-cn": "珊瑚"
        }
      },
      {
        "value": "Stone",
        "text": {
          "default": "Stone",
          "zh-cn": "石头"
        }
      },
      {
        "value": "River",
        "text": {
          "default": "River",
          "zh-cn": "河流"
        }
      },
      {
        "value": "Cloud",
        "text": {
          "default": "Cloud",
          "zh-cn": "云"
        }
      },
      {
        "value": "Fog",
        "text": {
          "default": "Fog",
          "zh-cn": "雾"
        }
      },
      {
        "value": "Wind",
        "text": {
          "default": "Wind",
          "zh-cn": "风"
        }
      },
      {
        "value": "Fire",
        "text": {
          "default": "Fire",
          "zh-cn": "火"
        }
      },
      {
        "value": "Rain",
        "text": {
          "default": "Rain",
          "zh-cn": "雨"
        }
      },
      {
        "value": "Snow",
        "text": {
          "default": "Snow",
          "zh-cn": "雪"
        }
      },
      {
        "value": "Star",
        "text": {
          "default": "Star",
          "zh-cn": "星星"
        }
      },
      {
        "value": "Moon",
        "text": {
          "default": "Moon",
          "zh-cn": "月亮"
        }
      },
      {
        "value": "Sun",
        "text": {
          "default": "Sun",
          "zh-cn": "太阳"
        }
      },
      {
        "value": "Well",
        "text": {
          "default": "Well",
          "zh-cn": "井"
        }
      },
      {
        "value": "Metal",
        "text": {
          "default": "Metal",
          "zh-cn": "金属"
        }
      },
      {
        "value": "Plastic",
        "text": {
          "default": "Plastic",
          "zh-cn": "塑料"
        }
      },
      {
        "value": "Glass",
        "text": {
          "default": "Glass",
          "zh-cn": "玻璃"
        }
      },
      {
        "value": "Dust",
        "text": {
          "default": "Dust",
          "zh-cn": "灰尘"
        }
      },
      {
        "value": "Paper",
        "text": {
          "default": "Paper",
          "zh-cn": "纸"
        }
      },
      {
        "value": "Cloth",
        "text": {
          "default": "Cloth",
          "zh-cn": "布"
        }
      },
      {
        "value": "Door",
        "text": {
          "default": "Door",
          "zh-cn": "门"
        }
      },
      {
        "value": "Window",
        "text": {
          "default": "Window",
          "zh-cn": "窗"
        }
      },
      {
        "value": "Mirror",
        "text": {
          "default": "Mirror",
          "zh-cn": "镜子"
        }
      },
      {
        "value": "Door number",
        "text": {
          "default": "Door number",
          "zh-cn": "门牌号"
        }
      },
      {
        "value": "Old key",
        "text": {
          "default": "Old key",
          "zh-cn": "旧钥匙"
        }
      },
      {
        "value": "Empty bottle",
        "text": {
          "default": "Empty bottle",
          "zh-cn": "空瓶子"
        }
      },
      {
        "value": "Broken phone",
        "text": {
          "default": "Broken phone",
          "zh-cn": "碎屏手机"
        }
      },
      {
        "value": "Unclaimed bag",
        "text": {
          "default": "Unclaimed bag",
          "zh-cn": "无人认领的包"
        }
      },
      {
        "value": "Ticket",
        "text": {
          "default": "Ticket",
          "zh-cn": "车票"
        }
      },
      {
        "value": "Receipt",
        "text": {
          "default": "Receipt",
          "zh-cn": "收据"
        }
      },
      {
        "value": "Old photo",
        "text": {
          "default": "Old photo",
          "zh-cn": "老照片"
        }
      },
      {
        "value": "Map",
        "text": {
          "default": "Map",
          "zh-cn": "地图"
        }
      },
      {
        "value": "Weather forecast",
        "text": {
          "default": "Weather forecast",
          "zh-cn": "天气预报"
        }
      },
      {
        "value": "Trash bin",
        "text": {
          "default": "Trash bin",
          "zh-cn": "垃圾桶"
        }
      },
      {
        "value": "Alarm clock",
        "text": {
          "default": "Alarm clock",
          "zh-cn": "闹钟"
        }
      },
      {
        "value": "Radio",
        "text": {
          "default": "Radio",
          "zh-cn": "收音机"
        }
      },
      {
        "value": "Refrigerator",
        "text": {
          "default": "Refrigerator",
          "zh-cn": "冰箱"
        }
      },
      {
        "value": "Washing machine",
        "text": {
          "default": "Washing machine",
          "zh-cn": "洗衣机"
        }
      },
      {
        "value": "Bed",
        "text": {
          "default": "Bed",
          "zh-cn": "床"
        }
      },
      {
        "value": "Chair",
        "text": {
          "default": "Chair",
          "zh-cn": "椅子"
        }
      },
      {
        "value": "Cup",
        "text": {
          "default": "Cup",
          "zh-cn": "杯子"
        }
      },
      {
        "value": "Pocket",
        "text": {
          "default": "Pocket",
          "zh-cn": "口袋"
        }
      },
      {
        "value": "Shoe",
        "text": {
          "default": "Shoe",
          "zh-cn": "鞋"
        }
      },
      {
        "value": "Umbrella",
        "text": {
          "default": "Umbrella",
          "zh-cn": "伞"
        }
      },
      {
        "value": "Curtain",
        "text": {
          "default": "Curtain",
          "zh-cn": "窗帘"
        }
      },
      {
        "value": "Drawer",
        "text": {
          "default": "Drawer",
          "zh-cn": "抽屉"
        }
      },
      {
        "value": "Wall",
        "text": {
          "default": "Wall",
          "zh-cn": "墙"
        }
      },
      {
        "value": "Crack",
        "text": {
          "default": "Crack",
          "zh-cn": "裂缝"
        }
      },
      {
        "value": "Staircase",
        "text": {
          "default": "Staircase",
          "zh-cn": "楼梯"
        }
      },
      {
        "value": "Expired pill",
        "text": {
          "default": "Expired pill",
          "zh-cn": "过期的药片"
        }
      },
      {
        "value": "Potted plant",
        "text": {
          "default": "Potted plant",
          "zh-cn": "盆栽"
        }
      },
      {
        "value": "Elevator",
        "text": {
          "default": "Elevator",
          "zh-cn": "电梯"
        }
      },
      {
        "value": "Subway",
        "text": {
          "default": "Subway",
          "zh-cn": "地铁"
        }
      },
      {
        "value": "Machine",
        "text": {
          "default": "Machine",
          "zh-cn": "机器"
        }
      },
      {
        "value": "Sensor",
        "text": {
          "default": "Sensor",
          "zh-cn": "传感器"
        }
      },
      {
        "value": "Server",
        "text": {
          "default": "Server",
          "zh-cn": "服务器"
        }
      },
      {
        "value": "Camera",
        "text": {
          "default": "Camera",
          "zh-cn": "摄像头"
        }
      },
      {
        "value": "Router",
        "text": {
          "default": "Router",
          "zh-cn": "路由器"
        }
      },
      {
        "value": "Surveillance camera",
        "text": {
          "default": "Surveillance camera",
          "zh-cn": "监控探头"
        }
      },
      {
        "value": "Bridge",
        "text": {
          "default": "Bridge",
          "zh-cn": "桥"
        }
      },
      {
        "value": "Streetlamp",
        "text": {
          "default": "Streetlamp",
          "zh-cn": "路灯"
        }
      },
      {
        "value": "Electric wire",
        "text": {
          "default": "Electric wire",
          "zh-cn": "电线"
        }
      },
      {
        "value": "Battery",
        "text": {
          "default": "Battery",
          "zh-cn": "电池"
        }
      },
      {
        "value": "Elevator button",
        "text": {
          "default": "Elevator button",
          "zh-cn": "电梯按钮"
        }
      },
      {
        "value": "Handrail",
        "text": {
          "default": "Handrail",
          "zh-cn": "扶手"
        }
      },
      {
        "value": "Data packet",
        "text": {
          "default": "Data packet",
          "zh-cn": "数据包"
        }
      },
      {
        "value": "Junk file",
        "text": {
          "default": "Junk file",
          "zh-cn": "垃圾文件"
        }
      },
      {
        "value": "Compressed file",
        "text": {
          "default": "Compressed file",
          "zh-cn": "压缩包"
        }
      },
      {
        "value": "Error code",
        "text": {
          "default": "Error code",
          "zh-cn": "错误代码"
        }
      },
      {
        "value": "Cache",
        "text": {
          "default": "Cache",
          "zh-cn": "缓存"
        }
      },
      {
        "value": "Browsing history",
        "text": {
          "default": "Browsing history",
          "zh-cn": "浏览历史"
        }
      },
      {
        "value": "Draft box",
        "text": {
          "default": "Draft box",
          "zh-cn": "草稿箱"
        }
      },
      {
        "value": "Unsent message",
        "text": {
          "default": "Unsent message",
          "zh-cn": "未发送信息"
        }
      },
      {
        "value": "Blank form",
        "text": {
          "default": "Blank form",
          "zh-cn": "空白表格"
        }
      },
      {
        "value": "Untitled file",
        "text": {
          "default": "Untitled file",
          "zh-cn": "未命名文件"
        }
      },
      {
        "value": "Damaged image",
        "text": {
          "default": "Damaged image",
          "zh-cn": "损坏的图像"
        }
      },
      {
        "value": "Temporary folder",
        "text": {
          "default": "Temporary folder",
          "zh-cn": "临时文件夹"
        }
      },
      {
        "value": "Search box",
        "text": {
          "default": "Search box",
          "zh-cn": "搜索框"
        }
      },
      {
        "value": "QR code",
        "text": {
          "default": "QR code",
          "zh-cn": "二维码"
        }
      },
      {
        "value": "Verification code",
        "text": {
          "default": "Verification code",
          "zh-cn": "验证码"
        }
      },
      {
        "value": "Loading icon",
        "text": {
          "default": "Loading icon",
          "zh-cn": "加载图标"
        }
      },
      {
        "value": "Black screen",
        "text": {
          "default": "Black screen",
          "zh-cn": "黑屏"
        }
      },
      {
        "value": "White noise",
        "text": {
          "default": "White noise",
          "zh-cn": "白噪音"
        }
      },
      {
        "value": "Recycle bin",
        "text": {
          "default": "Recycle bin",
          "zh-cn": "回收站"
        }
      },
      {
        "value": "Shadow",
        "text": {
          "default": "Shadow",
          "zh-cn": "影子"
        }
      },
      {
        "value": "Echo",
        "text": {
          "default": "Echo",
          "zh-cn": "回声"
        }
      },
      {
        "value": "Ghost",
        "text": {
          "default": "Ghost",
          "zh-cn": "幽灵"
        }
      },
      {
        "value": "Alien creature",
        "text": {
          "default": "Alien creature",
          "zh-cn": "外星生物"
        }
      },
      {
        "value": "Synthetic species",
        "text": {
          "default": "Synthetic species",
          "zh-cn": "合成物种"
        }
      },
      {
        "value": "Unnamed species",
        "text": {
          "default": "Unnamed species",
          "zh-cn": "未命名物种"
        }
      },
      {
        "value": "Hybrid species",
        "text": {
          "default": "Hybrid species",
          "zh-cn": "混合物种"
        }
      },
      {
        "value": "Expired species",
        "text": {
          "default": "Expired species",
          "zh-cn": "过期的物种"
        }
      },
      {
        "value": "Artificially cultivated thing",
        "text": {
          "default": "Artificially cultivated thing",
          "zh-cn": "人工培育物"
        }
      },
      {
        "value": "Simulated life",
        "text": {
          "default": "Simulated life",
          "zh-cn": "模拟生命"
        }
      },
      {
        "value": "A mass of fog",
        "text": {
          "default": "A mass of fog",
          "zh-cn": "一团雾"
        }
      },
      {
        "value": "A gust of wind",
        "text": {
          "default": "A gust of wind",
          "zh-cn": "一阵风"
        }
      },
      {
        "value": "An eye",
        "text": {
          "default": "An eye",
          "zh-cn": "一只眼睛"
        }
      },
      {
        "value": "A hole",
        "text": {
          "default": "A hole",
          "zh-cn": "一个洞"
        }
      },
      {
        "value": "An unread email",
        "text": {
          "default": "An unread email",
          "zh-cn": "一封未读邮件"
        }
      }
    ],
    "showOtherItem": true,
    "otherText": {
      "default": "Other",
      "zh-cn": "其他"
    }
  }
] satisfies SurveyQuestionDefinition[];
