import Mock from "mockjs"

Mock.mock('http://150.158.27.112:80/api/authority/captcha', 'get', (option) => {
  console.log(option)
  
  return {
    status: 200,
    msg: {
      token: 'ashd0weihasdpihde0weihip'
    }
  }
})

Mock.mock('http://150.158.27.112:80/api/authority/org/tree', 'get', (option) => {
  // console.log(option)
  
  return {
    "code": 200,
    "data": [
      {
        "id": "1055588377440030721",
        "name": "111",
        "type": 4,
        "subAgencies": []
      },
      {
        "id": "1051605677326039041",
        "name": "111",
        "type": 1,
        "subAgencies": []
      },
      {
        "id": "1062769917092463681",
        "name": "1121",
        "type": 1,
        "subAgencies": []
      },
      {
        "id": "1062786315789447745",
        "name": "啊",
        "type": 2,
        "subAgencies": []
      },
      {
        "id": "1062116595245386337",
        "name": "aaa",
        "type": 2,
        "subAgencies": []
      },
      {
        "id": "1049361076107575969",
        "name": "上海长虹",
        "type": 4,
        "subAgencies": []
      },
      {
        "id": "878358044411940769",
        "name": "西二旗",
        "type": 4,
        "subAgencies": []
      },
      {
        "id": "1063011900311006369",
        "name": "测试集团",
        "type": 1,
        "subAgencies": []
      },
      {
        "id": "804405479233493185",
        "name": "东三村网点",
        "type": 4,
        "subAgencies": [
          {
            "id": "1056265209650961505",
            "name": "12",
            "type": 4,
            "subAgencies": []
          }
        ]
      },
      {
        "id": "1051133884995771841",
        "name": "hgh",
        "type": 2,
        "subAgencies": []
      },
      {
        "id": "1062470030062987489",
        "name": "杭运集团",
        "type": 2,
        "subAgencies": []
      },
      {
        "id": "1049361201903141697",
        "name": "西二旗",
        "type": 2,
        "subAgencies": []
      },
      {
        "id": "1062761052913199937",
        "name": "1",
        "type": 1,
        "subAgencies": []
      },
      {
        "id": "100",
        "name": "品达物流集团有限公司",
        "type": 1,
        "subAgencies": [
          {
            "id": "101",
            "name": "品达上海分公司",
            "type": 1,
            "subAgencies": [
              {
                "id": "643776594376135105",
                "name": "徐汇一级转运中心",
                "type": 2,
                "subAgencies": [
                  {
                    "id": "1052913742457763073",
                    "name": "陆家嘴",
                    "type": 4,
                    "subAgencies": []
                  }
                ]
              },
              {
                "id": "643776633823564321",
                "name": "长宁一级转运中心",
                "type": 4,
                "subAgencies": []
              },
              {
                "id": "643775612976106881",
                "name": "黄埔一级转运中心",
                "type": 2,
                "subAgencies": [
                  {
                    "id": "789535718091081889",
                    "name": "黄埔小街网点",
                    "type": 4,
                    "subAgencies": []
                  }
                ]
              }
            ]
          },
          {
            "id": "695336250554489985",
            "name": "品达内蒙古分公司",
            "type": 1,
            "subAgencies": [
              {
                "id": "700636254798235713",
                "name": "赤峰市一级转运中心",
                "type": 2,
                "subAgencies": [
                  {
                    "id": "700636853841317601",
                    "name": "敖汉旗二级转运中心",
                    "type": 3,
                    "subAgencies": [
                      {
                        "id": "700637039321829409",
                        "name": "新惠镇网点",
                        "type": 4,
                        "subAgencies": []
                      }
                    ]
                  }
                ]
              },
              {
                "id": "700636671342954785",
                "name": "乌海市一级转运中心",
                "type": 2,
                "subAgencies": [
                  {
                    "id": "700639411464988897",
                    "name": "乌海网点1",
                    "type": 4,
                    "subAgencies": []
                  }
                ]
              }
            ]
          },
          {
            "id": "724645635571100545",
            "name": "品达河北分公司",
            "type": 1,
            "subAgencies": [
              {
                "id": "724645954665360385",
                "name": "廊坊转运中心",
                "type": 3,
                "subAgencies": [
                  {
                    "id": "724646248296000641",
                    "name": "燕郊网点",
                    "type": 4,
                    "subAgencies": []
                  }
                ]
              }
            ]
          },
          {
            "id": "102",
            "name": "品达北京分公司",
            "type": 1,
            "subAgencies": [
              {
                "id": "695334975641262337",
                "name": "西城一级转运中心",
                "type": 2,
                "subAgencies": []
              },
              {
                "id": "643776668917305985",
                "name": "昌平转运中心",
                "type": 2,
                "subAgencies": [
                  {
                    "id": "695314539750654529",
                    "name": "昌平沙河转运中心",
                    "type": 3,
                    "subAgencies": [
                      {
                        "id": "724645277855689249",
                        "name": "建材城网点",
                        "type": 4,
                        "subAgencies": []
                      },
                      {
                        "id": "1213016294585143296",
                        "name": "东二村网点",
                        "type": 4,
                        "subAgencies": []
                      },
                      {
                        "id": "695314678926049953",
                        "name": "东一村网点",
                        "type": 4,
                        "subAgencies": []
                      }
                    ]
                  }
                ]
              },
              {
                "id": "643776713909605089",
                "name": "朝阳一级转运中心",
                "type": 2,
                "subAgencies": []
              },
              {
                "id": "643776757199016769",
                "name": "海淀一级转运中心",
                "type": 2,
                "subAgencies": [
                  {
                    "id": "1067246875800000001",
                    "name": "西三旗网点",
                    "type": 4,
                    "subAgencies": []
                  }
                ]
              }
            ]
          },
          {
            "id": "700638220043571777",
            "name": "品达吉林分公司",
            "type": 1,
            "subAgencies": [
              {
                "id": "700638392215556801",
                "name": "品达长春二级转运中心",
                "type": 3,
                "subAgencies": [
                  {
                    "id": "700638561250202433",
                    "name": "农安县网点",
                    "type": 4,
                    "subAgencies": []
                  }
                ]
              }
            ]
          },
          {
            "id": "700638895628506177",
            "name": "品达辽宁分公司",
            "type": 1,
            "subAgencies": [
              {
                "id": "700639142559765825",
                "name": "品达沈阳一级转运中心",
                "type": 2,
                "subAgencies": [
                  {
                    "id": "700645097880057569",
                    "name": "沈阳网点",
                    "type": 4,
                    "subAgencies": []
                  }
                ]
              },
              {
                "id": "1051815841480177761",
                "name": "品达鞍山一级转运中心",
                "type": 2,
                "subAgencies": []
              }
            ]
          }
        ]
      },
      {
        "id": "1062756860890881153",
        "name": "1",
        "type": 1,
        "subAgencies": []
      },
      {
        "id": "1051895544316608193",
        "name": "烦烦烦",
        "type": 2,
        "subAgencies": []
      },
      {
        "id": "1062749200514685889",
        "name": "1234567",
        "type": 2,
        "subAgencies": []
      }
    ],
  "msg": "ok",
  }
})