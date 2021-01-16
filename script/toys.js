let toys = [
  {
    name: 'Vulture, black',
    description:
      'tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim',
    price: 65.03,
    inventory: 76
  },
  {
    name: 'King cormorant',
    description:
      'maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur',
    price: 47.04,
    inventory: 80
  },
  {
    name: 'Woodrat (unidentified)',
    description: 'integer a nibh in quis justo maecenas rhoncus aliquam lacus',
    price: 75.12,
    inventory: 60
  },
  {
    name: 'Rock dove',
    description:
      'euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin',
    price: 34.27,
    inventory: 75
  },
  {
    name: 'Yellow-billed stork',
    description:
      'morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam',
    price: 11.33,
    inventory: 61
  },
  {
    name: 'Mongoose, eastern dwarf',
    description:
      'lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer',
    price: 47.32,
    inventory: 41
  },
  {
    name: 'Great egret',
    description:
      'pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci',
    price: 42.62,
    inventory: 94
  },
  {
    name: 'Greater kudu',
    description:
      'erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget',
    price: 18.19,
    inventory: 90
  },
  {
    name: 'Civet cat',
    description:
      'condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque',
    price: 73.87,
    inventory: 82
  },
  {
    name: 'Cat, african wild',
    description:
      'eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis',
    price: 42.72,
    inventory: 40
  },
  {
    name: 'White-winged tern',
    description:
      'libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in',
    price: 91.64,
    inventory: 92
  },
  {
    name: 'Chimpanzee',
    description:
      'vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue',
    price: 91.39,
    inventory: 35
  },
  {
    name: 'Dove, rock',
    description:
      'lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum',
    price: 52.81,
    inventory: 56
  },
  {
    name: 'Peccary, white-lipped',
    description:
      'amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo',
    price: 36.9,
    inventory: 90
  },
  {
    name: 'Trumpeter swan',
    description:
      'id nulla ultrices aliquet maecenas leo odio condimentum id luctus',
    price: 31.59,
    inventory: 5
  },
  {
    name: 'Kelp gull',
    description:
      'eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus',
    price: 49.2,
    inventory: 96
  },
  {
    name: 'Vulture, oriental white-backed',
    description:
      'nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis',
    price: 69.12,
    inventory: 96
  },
  {
    name: 'Lynx, african',
    description:
      'et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum',
    price: 51.06,
    inventory: 3
  },
  {
    name: 'Green heron',
    description:
      'leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat',
    price: 88.74,
    inventory: 98
  },
  {
    name: 'American alligator',
    description:
      'turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis',
    price: 30.52,
    inventory: 51
  },
  {
    name: 'Pintail, bahama',
    description:
      'augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse',
    price: 53.94,
    inventory: 18
  },
  {
    name: 'Armadillo, common long-nosed',
    description:
      'at turpis a pede posuere nonummy integer non velit donec diam neque',
    price: 62.46,
    inventory: 19
  },
  {
    name: 'Eagle, long-crested hawk',
    description:
      'erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a',
    price: 2.55,
    inventory: 82
  },
  {
    name: 'Bear, grizzly',
    description:
      'odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer',
    price: 96.29,
    inventory: 35
  },
  {
    name: 'White-faced whistling duck',
    description:
      'eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus',
    price: 78.84,
    inventory: 64
  },
  {
    name: 'Gull, dusky',
    description:
      'turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam',
    price: 28.07,
    inventory: 75
  },
  {
    name: 'Duiker, common',
    description:
      'quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in',
    price: 35.16,
    inventory: 66
  },
  {
    name: 'Otter, african clawless',
    description:
      'non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
    price: 86.28,
    inventory: 15
  },
  {
    name: 'Common wallaroo',
    description:
      'ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent',
    price: 49.74,
    inventory: 78
  },
  {
    name: 'Shrew, mandras tree',
    description:
      'faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin',
    price: 70.21,
    inventory: 72
  },
  {
    name: 'Heron, goliath',
    description:
      'morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est',
    price: 76.89,
    inventory: 40
  },
  {
    name: 'Red-billed buffalo weaver',
    description:
      'platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem',
    price: 58.8,
    inventory: 63
  },
  {
    name: 'Southern screamer',
    description:
      'maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut',
    price: 20.12,
    inventory: 2
  },
  {
    name: 'Crown of thorns starfish',
    description:
      'eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo',
    price: 5.98,
    inventory: 39
  },
  {
    name: 'Catfish, blue',
    description:
      'consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in',
    price: 25.41,
    inventory: 31
  },
  {
    name: 'North American red fox',
    description:
      'justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse',
    price: 82.36,
    inventory: 30
  },
  {
    name: 'African wild dog',
    description:
      'etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent',
    price: 1.62,
    inventory: 18
  },
  {
    name: 'Kingfisher, white-throated',
    description:
      'quis lectus suspendisse potenti in eleifend quam a odio in hac',
    price: 46.53,
    inventory: 57
  },
  {
    name: 'Seal, southern elephant',
    description:
      'etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate',
    price: 2.75,
    inventory: 47
  },
  {
    name: 'Pintail, bahama',
    description:
      'adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur',
    price: 15.2,
    inventory: 48
  },
  {
    name: "Cook's tree boa",
    description:
      'platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate',
    price: 41.59,
    inventory: 26
  },
  {
    name: 'Burrowing owl',
    description:
      'tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede',
    price: 18.72,
    inventory: 48
  },
  {
    name: 'Starling, red-shouldered glossy',
    description:
      'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue',
    price: 12.61,
    inventory: 35
  },
  {
    name: 'Macaque, japanese',
    description:
      'dolor quis odio consequat varius integer ac leo pellentesque ultrices',
    price: 81.68,
    inventory: 51
  },
  {
    name: 'Kangaroo, western grey',
    description:
      'quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer',
    price: 76.04,
    inventory: 73
  },
  {
    name: 'Monitor, white-throated',
    description:
      'sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin',
    price: 59.51,
    inventory: 6
  },
  {
    name: 'Jackal, indian',
    description:
      'pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam',
    price: 69.5,
    inventory: 15
  },
  {
    name: 'Cormorant, great',
    description:
      'scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin',
    price: 89.88,
    inventory: 5
  },
  {
    name: 'Feathertail glider',
    description:
      'sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue',
    price: 47.48,
    inventory: 70
  },
  {
    name: 'Water legaan',
    description:
      'pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu',
    price: 78.54,
    inventory: 37
  },
  {
    name: 'Heron, yellow-crowned night',
    description:
      'quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis',
    price: 90.32,
    inventory: 44
  },
  {
    name: 'Palm squirrel',
    description:
      'suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec',
    price: 79.9,
    inventory: 16
  },
  {
    name: 'Skimmer, four-spotted',
    description: 'augue a suscipit nulla elit ac nulla sed vel enim sit amet',
    price: 46.89,
    inventory: 93
  },
  {
    name: 'Ant (unidentified)',
    description:
      'eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer',
    price: 76.75,
    inventory: 34
  },
  {
    name: 'Eagle, tawny',
    description:
      'in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non',
    price: 37.81,
    inventory: 72
  },
  {
    name: 'Coot, red-knobbed',
    description:
      'posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac',
    price: 56.15,
    inventory: 59
  },
  {
    name: 'Gull, southern black-backed',
    description:
      'ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin',
    price: 94.73,
    inventory: 44
  },
  {
    name: 'Falcon, peregrine',
    description:
      'enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris',
    price: 68.85,
    inventory: 99
  },
  {
    name: 'Klipspringer',
    description:
      'primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis',
    price: 90.47,
    inventory: 31
  },
  {
    name: 'Dassie',
    description:
      'integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id',
    price: 98.17,
    inventory: 4
  },
  {
    name: 'Pied kingfisher',
    description:
      'ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et',
    price: 75.97,
    inventory: 16
  },
  {
    name: 'Crocodile, nile',
    description:
      'venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo',
    price: 20.53,
    inventory: 11
  },
  {
    name: 'Southern ground hornbill',
    description:
      'porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce',
    price: 68.21,
    inventory: 93
  },
  {
    name: 'Wolf, common',
    description:
      'eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus',
    price: 69.42,
    inventory: 57
  },
  {
    name: 'Colobus, magistrate black',
    description:
      'leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin',
    price: 75.75,
    inventory: 99
  },
  {
    name: 'Penguin, little blue',
    description:
      'dui vel sem sed sagittis nam congue risus semper porta volutpat quam',
    price: 82.49,
    inventory: 87
  },
  {
    name: 'Owl, white-browed',
    description:
      'justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque',
    price: 71.69,
    inventory: 46
  },
  {
    name: 'Langur, common',
    description:
      'accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris',
    price: 97.61,
    inventory: 94
  },
  {
    name: 'Hawk-headed parrot',
    description: 'duis consequat dui nec nisi volutpat eleifend donec ut dolor',
    price: 1.69,
    inventory: 60
  },
  {
    name: 'Baboon, olive',
    description:
      'congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc',
    price: 71.35,
    inventory: 93
  },
  {
    name: 'Jungle kangaroo',
    description:
      'amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt',
    price: 60.53,
    inventory: 80
  },
  {
    name: 'Two-toed tree sloth',
    description:
      'diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut',
    price: 74.89,
    inventory: 55
  },
  {
    name: 'White-cheeked pintail',
    description:
      'venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut',
    price: 58.48,
    inventory: 78
  },
  {
    name: 'Red-necked phalarope',
    description:
      'tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque',
    price: 49.93,
    inventory: 54
  },
  {
    name: 'Dove, white-winged',
    description:
      'maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus',
    price: 18.98,
    inventory: 35
  },
  {
    name: 'Komodo dragon',
    description:
      'rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis',
    price: 8.97,
    inventory: 15
  },
  {
    name: 'Black-footed ferret',
    description:
      'suspendisse potenti cras in purus eu magna vulputate luctus cum sociis',
    price: 73.58,
    inventory: 62
  },
  {
    name: 'Greylag goose',
    description:
      'justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing',
    price: 62.03,
    inventory: 50
  },
  {
    name: 'Deer, spotted',
    description:
      'amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at',
    price: 20.2,
    inventory: 29
  },
  {
    name: 'Malachite kingfisher',
    description:
      'pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris',
    price: 76.41,
    inventory: 61
  },
  {
    name: 'Cat, tiger',
    description:
      'ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi',
    price: 96.2,
    inventory: 55
  },
  {
    name: 'Trotter, lily',
    description:
      'vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris',
    price: 73.34,
    inventory: 10
  },
  {
    name: 'Snake, eastern indigo',
    description: 'pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam',
    price: 71.79,
    inventory: 24
  },
  {
    name: 'Black rhinoceros',
    description:
      'interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien',
    price: 44.21,
    inventory: 15
  },
  {
    name: 'Galapagos dove',
    description:
      'odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in',
    price: 97.33,
    inventory: 15
  },
  {
    name: 'Cape cobra',
    description:
      'pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus',
    price: 23.24,
    inventory: 78
  },
  {
    name: 'Cormorant, little',
    description:
      'maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices',
    price: 88.25,
    inventory: 84
  },
  {
    name: 'Hummingbird (unidentified)',
    description:
      'ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel',
    price: 48.51,
    inventory: 81
  },
  {
    name: 'Violet-eared waxbill',
    description:
      'ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti',
    price: 8.55,
    inventory: 99
  },
  {
    name: 'Monitor, white-throated',
    description:
      'est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl',
    price: 55.74,
    inventory: 43
  },
  {
    name: 'Savanna baboon',
    description:
      'habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida',
    price: 58.29,
    inventory: 84
  },
  {
    name: 'Rhesus macaque',
    description:
      'porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac',
    price: 5.56,
    inventory: 77
  },
  {
    name: 'Sheep, red',
    description:
      'orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut',
    price: 66.31,
    inventory: 64
  },
  {
    name: 'Eastern quoll',
    description:
      'nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing',
    price: 41.28,
    inventory: 57
  },
  {
    name: "Barbet, levaillant's",
    description:
      'vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla',
    price: 33.19,
    inventory: 93
  },
  {
    name: 'Sulfur-crested cockatoo',
    description: 'lectus in est risus auctor sed tristique in tempus sit',
    price: 64.34,
    inventory: 88
  },
  {
    name: 'Owl, white-browed',
    description:
      'odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus',
    price: 81.31,
    inventory: 52
  },
  {
    name: 'Plains zebra',
    description:
      'quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum',
    price: 24.94,
    inventory: 20
  },
  {
    name: 'Sandpiper, spotted wood',
    description:
      'potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum',
    price: 62.36,
    inventory: 6
  },
  {
    name: 'Amazon parrot (unidentified)',
    description:
      'lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque',
    price: 47.94,
    inventory: 69
  }
]

module.exports = toys
