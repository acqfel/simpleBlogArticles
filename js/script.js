
function loadData() {

    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
   
    $nytElem.text("");
    
    //json
    var dados=[
  {
    "post": [
      {
        "id": "587bd9cf2ecbdecf129bbf33",
        "title": "exercitation",
        "text": "Excepteur aliqua veniam non occaecat non quis adipisicing. Qui adipisicing enim magna nostrud magna esse ex duis magna deserunt et. Adipisicing anim anim magna laborum ex id velit minim occaecat do elit Lorem consequat consectetur. Consectetur nulla tempor ex elit id irure. Officia commodo cillum enim velit. Velit aliqua ea culpa culpa in minim non consectetur dolore nulla fugiat incididunt minim qui.\r\n",
        "date": "2015-03-06T08:34:37 +03:00"
      }
    ],
    "images": [
      {
        "id": "587bd9cf372e5e2ccf46b7cb",
        "title": "esse",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cfb86b60ad265ad582",
        "title": "consectetur",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cfad16d4313379480e",
        "title": "ea",
        "url": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "post": [
      {
        "id": "587bd9cfd227a5d681658c91",
        "title": "in",
        "text": "Sint velit qui occaecat elit duis fugiat. Consequat ut anim fugiat incididunt duis dolore incididunt laboris proident quis exercitation. Elit non voluptate exercitation eu eiusmod laborum enim excepteur exercitation reprehenderit mollit enim aliquip ipsum. Ipsum amet pariatur deserunt non exercitation culpa amet ipsum velit irure sint.\r\n",
        "date": "2015-10-17T02:42:56 +03:00"
      }
    ],
    "images": [
      {
        "id": "587bd9cf970d22efc5126c3e",
        "title": "nisi",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cf54074a3869e355e4",
        "title": "sit",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cfce5ca53028e41463",
        "title": "eu",
        "url": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "post": [
      {
        "id": "587bd9cf5501e0321f6997b7",
        "title": "dolore",
        "text": "Commodo quis ullamco amet reprehenderit pariatur reprehenderit aute. Commodo ad laboris magna sit reprehenderit tempor quis est pariatur nisi. Pariatur ullamco officia sit sint voluptate aliqua id exercitation et culpa. Id ullamco Lorem culpa cillum ullamco consectetur sunt anim labore et cillum aliquip consequat.\r\n",
        "date": "2016-07-12T07:50:09 +03:00"
      }
    ],
    "images": [
      {
        "id": "587bd9cf0ac4fef0959e6e64",
        "title": "consequat",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cf6c99f127bd258e37",
        "title": "id",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cf876dd103117d04ed",
        "title": "est",
        "url": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "post": [
      {
        "id": "587bd9cfe3a7ad5be8586947",
        "title": "laborum",
        "text": "Non aute labore non excepteur pariatur nulla qui et. Ullamco ullamco elit proident laborum aliquip proident nulla aliquip elit do occaecat proident. Culpa ipsum nisi dolor voluptate duis laborum non sit ea. Deserunt magna velit adipisicing commodo et nulla quis.\r\n",
        "date": "2016-08-25T02:29:29 +03:00"
      }
    ],
    "images": [
      {
        "id": "587bd9cfd1bc2816768f693e",
        "title": "esse",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cf52debe4483e70f0f",
        "title": "excepteur",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cf2ef0068439357420",
        "title": "irure",
        "url": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "post": [
      {
        "id": "587bd9cf90be3cc86d846f94",
        "title": "amet",
        "text": "Est eiusmod eu do velit voluptate do ut. Minim occaecat laboris deserunt occaecat aute sint. Nulla qui non dolor culpa duis ipsum ex elit. Officia anim exercitation adipisicing voluptate duis duis ullamco.\r\n",
        "date": "2015-12-31T12:44:53 +02:00"
      }
    ],
    "images": [
      {
        "id": "587bd9cfbf4d653198a5df3e",
        "title": "duis",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cfc5912c656dc0ad57",
        "title": "labore",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cfab5dbab9b24ab825",
        "title": "velit",
        "url": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "post": [
      {
        "id": "587bd9cf3e050b83d64ffbae",
        "title": "cillum",
        "text": "Magna tempor consequat id magna magna quis irure irure pariatur. Occaecat sint nostrud sit irure exercitation. Dolore veniam labore consequat et cillum qui cupidatat adipisicing. Eiusmod dolor deserunt eu qui voluptate enim do aute anim eiusmod irure proident eu.\r\n",
        "date": "2015-11-18T07:02:25 +02:00"
      }
    ],
    "images": [
      {
        "id": "587bd9cfd6dfab4384557ad3",
        "title": "mollit",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cf25889d954f051819",
        "title": "voluptate",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cfaa43c2830ad4289f",
        "title": "occaecat",
        "url": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "post": [
      {
        "id": "587bd9cfe54582c3aa95704d",
        "title": "amet",
        "text": "Nisi et cillum in consectetur in adipisicing. Aliquip consequat incididunt quis est ex dolor culpa et id qui quis occaecat. Ex veniam ea fugiat ipsum velit cillum duis nostrud culpa elit consectetur pariatur veniam commodo.\r\n",
        "date": "2016-04-01T09:47:28 +03:00"
      }
    ],
    "images": [
      {
        "id": "587bd9cff93106a9cce285a0",
        "title": "minim",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cfb7346c3640367a9e",
        "title": "enim",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cf9a492c2f3b2f0729",
        "title": "et",
        "url": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "post": [
      {
        "id": "587bd9cfc026cc9cebc3cf20",
        "title": "aute",
        "text": "Laborum et ipsum Lorem proident sunt duis. Ea proident enim qui reprehenderit. Deserunt Lorem aliqua et ut cillum eiusmod. Anim aute incididunt et voluptate dolor aliquip consectetur consectetur consectetur. Minim ipsum culpa esse cillum voluptate ullamco. Ex mollit voluptate tempor occaecat anim anim irure dolore consectetur reprehenderit aute. Excepteur Lorem eiusmod velit fugiat reprehenderit dolor reprehenderit cupidatat anim commodo.\r\n",
        "date": "2015-08-10T11:03:37 +03:00"
      }
    ],
    "images": [
      {
        "id": "587bd9cf69da87b2f3090791",
        "title": "laboris",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cf835d8b7970fda8ed",
        "title": "veniam",
        "url": "http://placehold.it/32x32"
      },
      {
        "id": "587bd9cfefe712287f281d34",
        "title": "deserunt",
        "url": "http://placehold.it/32x32"
      }
    ]
  }
];
    
    console.log(dados);
    
    for(var i=0; i < dados.length; i++) {
            console.log(dados[i].post[0].title);
            var dado = dados[i].post[0];
            $nytElem.append('<li class="article">'+
                            '<a href="'+dado.id+'">'+
                            dado.title+'</a>'+
                            '<p>'+dado.text+'</p>'+
                            '<p>'+dado.date+'</p>'+
                            '</li>');
            //console.log(dados[i].images);
            
            for(var j=0; j < dados[i].images.length; j++){
              var image = dados[i].images[j];
              $nytElem.append('<tr>'+
                            '<td>'+image.title+'</td>'+
                            '<td>'+'<img  src="'+image.url+'">'+'</td>'+
                            '</tr>');
            }
    }
    
    return false;
};

$('#form-container').submit(loadData);
