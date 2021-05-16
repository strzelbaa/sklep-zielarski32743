const products = [
  {
    "type": "herb",
    "id": "blaclilac100",
    "image": "images/black-2384331__340.webp",
    "name": "Kwiat bzu czarnego 100g",
    "description": "Picie naparów z kwiatów czarnego bzu wspomoże oczyszczanie organizmu, jest również wskazane przy infekcjach układu moczowego, ze względu na działanie moczopędne i przeciwzapalne. Dodatkowo u mężczyzn, dzięki zawartości fitosteroli, regularne picie naparów z kwiatów czarnego bzu łagodzi przerost gruczołu krokowego.",
    "price": 8.99
  },
  {
    "type": "herb",
    "id": "lavender100",
    "image": "images/lavender-2117432__340.jpg",
    "name": "Susz lawendowy 100g",
    "description": "Susz lawendowy, czyli suszona lawenda z plantacji zlokalizowanych w Polsce. Susz lawendowy, znajduje zastosowanie w kąpieli, w saszetkach zapachowych do szafy oraz jako składnik mydeł i kul kąpielowych. Lawenda ma działanie kojące i antyseptyczne.",
    "price": 5.99
  },
  {
    "type": "herb",
    "id": "peppermint50",
    "image": "images/peppermint-4487398_1280.jpg",
    "name": "Mięta cięta świeża 50g",
    "description": "Mięta cięta prosto z pola o mocnym i orzeżwiającym zapachu. Świetna jako dodatek do koktajli, wody, lodów. Parzona mięta pomaga w zwalczaniu problemów żołądkowych. W pęczku znajdziesz mix mięty tradycyjnej, pieprzowej i jabłkowej. Uprawiana na naturalnym nawozie. Każdy produkt który Państwu oferuję jest przygotowany świeży, maksymalnie 24h przed tym jak Państwo go otrzymujecie.",
    "price": 3.99
  },
  {
    "type": "herb",
    "id": "oregano50",
    "image": "images/marjoram-2370814__340.webp",
    "name": "Oregano suszone 50g",
    "description": "Oregano jest ważnym ziołem w kuchni, w wersji suszonej jego liście mają niejednokrotnie lepszy smak niż w świeżej odsłonie. Oregano zazwyczaj stosowane jest do sosów, pizzy, przyprawiania mięs i sałatek. Posiada liczne właściwości zdrowotne, używane jest bowiem jako środek antyseptyczny, a także jako lek na żołądek, jelita oraz dolegliwości układu oddechowego. Łagodząco wpływa na rany, podrażnienia i choroby skóry, odtruwa również organizm.",
    "price": 8.99
  },
  {
    "type": "herb",
    "id": "rosehips50",
    "image": "images/rosehips-285436__340.webp",
    "name": "Owoc dzikiej róży 50g",
    "description": "Dzika róża owoc 100% to naturalne źródło witaminy C. Wg prof. Iwony Wawer, dwa ziarenka dzikiej róży zapewniają całodzienne zapotrzebowanie na witaminę C. Wykazuje bardzo dużą zawartość antyoksydantów, a zatem chroni organizm przed wolnymi rodnikami. Dzika róża wykazuje również działanie mogące pomóc w osteoporozę. ",
    "price": 14.99
  },
  {
    "type": "herb",
    "id": "nettle100",
    "image": "images/stinging-nettle-228248__340.webp",
    "name": "Pokrzywa liść 100g",
    "description": "Pokrzywa zawiera kwas foliowy, żelazo, mnóstwo witaminy C, wapń, krzem – to tylko kilka z jej bezcennych składników, które wzmacniają, oczyszczają i regenerują ludzki organizm. Wyciąg z liści pokrzywy i sporządzone z niej napary pomagają w pozbyciu się toksyn (zwłaszcza mocznika) z organizmu, a także ułatwiają trawienie i łagodzą dolegliwości związane ze stanem zapalnym przewodu pokarmowego. ",
    "price": 7.99
  },
  {
    "type": "herb",
    "id": "camomile100",
    "image": "images/camomile-2080167__340.webp",
    "name": "Rumianek ziele 100g",
    "description": "Ze względu na bogactwo składników, rumianek działa przeciwzapalnie i rozkurczowo na gładkie mięśnie przewodu pokarmowego. Z tego względu herbata rumiankowa jest polecana przy dolegliwościach pokarmowych takich jak: odbijanie czy wzdęcia. Działa łagodząco i przeciwzapalnie, ponadto rozluźnia mięśnie gładkie przewodu pokarmowego i dróg żółciowych, ułatwiając pasaż pokarmu i prawidłową perystaltykę jelit. Ma także działanie wiatropędne. ",
    "price": 3.99
  },
  {
    "type": "herb",
    "id": "groblumiges100",
    "image": "images/large-floral-st-johns-wort-2461663__340.jpg",
    "name": "Dziurawiec ziele 100g",
    "description": "Ziele dziurawca działa rozkurczowo na mięśnie gładkie układu pokarmowego, wykazuje działanie żółciotwórcze, żółciopędne oraz moczopędne. Polecane przy niestrawności, chorobach wątroby i dróg żółciowych a także w zaburzeniach pracy przewodu pokarmowego. Pomaga w przypadku dny moczanowej, kamicy, nieżytu żołądka i jelit, wzdęć, wrzodów czy biegunki. Jednym z najbardziej znanych właściwości dziurawca jest jego działanie antydepresyjne. Ziele dziurawca uspokaja i wycisza.",
    "price": 3.99
  },
  {
    "type": "oil",
    "id": "oil1",
    "image": "images/glass-4108085__340.webp",
    "name": "Olejek arganowy",
    "description": "Olej arganowy to jeden z najlepiej działających naturalnych kosmetyków wspomagających zachowanie młodego wyglądu. Ze względu na swoją barwę i bogactwo właściwości zwany jest „płynnym złotem”.",
    "price": 19.99
  },
  {
    "type": "oil",
    "id": "oil2",
    "image": "images/stones-1341224__340.webp",
    "name": "Olejek bambusowy 40ml",
    "description": "Wyciąg zapachu z bambusa o bardzo unikalnym zapachu doskonale się sprawdza do domowego SPA.",
    "price": 11.69
  },
  {
    "type": "oil",
    "id": "oil3",
    "image": "images/laurier-1763690__340.jpg",
    "name": "Olej laurowy 50ml",
    "description": "Olej laurowy posiada ciemnozieloną barwę, dzięki dużej zawartości chlorofilu W temperaturze pokojowej ma stałą konsystencję, topi się przy kontakcie ze skórą. Idealny do pielęgnacji: skóry problemowej, trądzikowej, z nadprodukcją sebum, rozszerzonymi porami, cery atopowej, z egzemą lub łuszczycą, skóry głowy objętej łupieżem, przy problemie wypadania włosów, miejsc opuchniętych, dotkniętych reumatyzmem, kruchych i łamliwych paznokci.",
    "price": 39.99
  },
  {
    "type": "oil",
    "id": "oil3",
    "image": "images/olive-oil-3326703__340.webp",
    "name": "Oliwa z oliwek 250ml",
    "description": "Oliwa z oliwek jest bogatym źródłem nienasyconych kwasów tłuszczowych. Zawiera aż 79g jednonienasyconych (kwas oleinowy) i 13g wielonienasyconych kwasów tłuszczowych na 100g. Zastępowanie w diecie tłuszczów nasyconych tłuszczami nienasyconymi pomaga w utrzymaniu prawidłowego poziomu cholesterolu we krwi (jedno- i wielonienasycone kwasy tłuszczowe są tłuszczami nienasyconymi). Utrzymanie prawidłowego stanu zdrowia wymaga zrównoważonego odżywiania i prowadzenia zdrowego trybu życia.",
    "price": 19.99
  },
  {
    "type": "cosmetic",
    "id": "cosmetic1",
    "image": "images/soap-2726394__340.webp",
    "name": "Mydło arganowe organiczne 100g",
    "description": "Organiczne mydło z olejkiem arganowym i ekstraktem z liści oczaru wirginijskiego wytwarzane jest ręcznie. Powstaje z najwyższej jakości, ekologicznych surowców pochodzących  z certyfikowanych upraw ekologicznych.",
    "price": 10.99
  },
  {
    "type": "cosmetic",
    "id": "cosmetic2",
    "image": "images/handmade-1139554__340.webp",
    "name": "Zestaw 3 mydeł ręcznie robionych 3 x 100g",
    "description": "To doskonały i niepowtarzalny prezent dla bliskiej osoby. Zestaw 3 kostek naturalnego mydła",
    "price": 25.55
  },
  {
    "type": "cosmetic",
    "id": "cosmetic3",
    "image": "images/bath-balls-3006585__340.webp",
    "name": "Kulki do kąpieli 2 x 80g",
    "description": "Dzięki jednej niedużej kuli w każdej chwili możesz zafundować sobie domowe SPA. Produkcja tych wyjątkowych kosmetyków oparta jest tylko na naturalnych, starannie wyselekcjonowanych surowcach, a to dzięki nim Twoja skóra będzie doskonale nawilżona, a zapach unoszący się w kąpieli pomoże zostawić codzienność za drzwiami łazienki. ",
    "price": 23.89
  },
  {
    "type": "cosmetic",
    "id": "cosmetic4",
    "image": "images/coconut-oil-on-wooden-spoon-2090575__340.webp",
    "name": "Olej kokosowy 150ml",
    "description": "Olej kokosowy ECOSPA otrzymywany jest z miąższu owoców (orzechów) palmy kokosowej. Olej znajdujący się w naszej ofercie pochodzi z ekologicznej uprawy ze Sri Lanki. Olej ten posiada europejski certyfikat ECOCERT. Może być stosowany do masażu oraz pielęgnacji ciała i włosów. Poprawia stan cery atopowej. Świetnie nawilża i odżywia skórę.",
    "price": 10.95
  }

]