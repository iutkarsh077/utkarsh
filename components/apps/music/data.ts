import { Playlist } from "./types";

// Punjabi-forward library inspired by nikhilsheoran.com/music
export const DEFAULT_PLAYLISTS: Playlist[] = [
  {
    id: "frequently-played",
    name: "Frequently Played",
    description: "On repeat — Punjabi heat and a few wildcards",
    coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/3c/ce/cb/3ccecba1-52f8-3aef-29c7-29a5c6a64b14/cover.jpg/600x600bb.jpg",
    is_featured: true,
    tracks: [
      {
        id: "fp1",
        name: "Dark Love",
        artist: "Sidhu Moose Wala",
        album: "Dark Love - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/3c/ce/cb/3ccecba1-52f8-3aef-29c7-29a5c6a64b14/cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/32/43/6f/32436f25-2771-7dcb-a575-39c9f6907ee6/mzaf_14145901939970646340.plus.aac.p.m4a",
        duration: 305,
      },
      {
        id: "fp2",
        name: "Badnam",
        artist: "Mankirt Aulakh",
        album: "Badnam - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/69/7e/76/697e76e1-61a3-ac09-0df2-655f426c0bb6/8902633274853.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/29/73/c9/2973c91f-71ad-568c-5e54-362e2acb6c1a/mzaf_2613698502860216184.plus.aac.p.m4a",
        duration: 119,
      },
      {
        id: "fp3",
        name: "Y.D.G",
        artist: "Karan Aujla & YEAH PROOF",
        album: "Four Me (Apple Music Edition) - EP",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c2/ce/a0/c2cea088-dbde-43db-346f-e536058fdcfb/5063483978438_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4e/aa/b0/4eaab001-d481-9bce-ecd3-11cbfb210a3b/mzaf_5963655609452342455.plus.aac.p.m4a",
        duration: 172,
      },
      {
        id: "fp4",
        name: "Ik Tarfa",
        artist: "Arjan Dhillon",
        album: "A for Arjan 2",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2d/ae/71/2dae710b-3a86-23d1-2629-621712e8338e/8905285240214.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/39/e8/6b/39e86bc1-7712-1e4b-5b94-11a56838a9e3/mzaf_8148720845111973191.plus.aac.p.m4a",
        duration: 264,
      },
      {
        id: "fp5",
        name: "Criminal",
        artist: "Britney Spears",
        album: "Femme Fatale (Deluxe Version)",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f6/b5/e1/f6b5e110-5ae3-1db4-ae81-e8d59d0e1c92/884977898842.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bb/e9/ad/bbe9ad70-3141-951d-49f3-d7d2045f855c/mzaf_2723233998202938723.plus.aac.p.m4a",
        duration: 225,
      },
      {
        id: "fp6",
        name: "Tu Hi Haqeeqat (From \"Tum Mile\")",
        artist: "Javed Ali, Pritam, Irshan Ashraf & Shadab",
        album: "Best of Me: Pritam",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/37/27/a0/3727a0a1-d510-db4f-2fe0-fdc0a77afec8/886444060011.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/44/42/f8/4442f8cc-762f-533e-1e4e-7ac9d656dabe/mzaf_6872596968058125447.plus.aac.p.m4a",
        duration: 302,
      },
      {
        id: "fp7",
        name: "Backbone",
        artist: "Harrdy Sandhu",
        album: "Backbone - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e2/64/0e/e2640e95-17c6-3924-8717-5cf87fceebc2/886446309828.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0c/f5/f4/0cf5f4fd-df54-d64c-da79-d39d3f4bf0c7/mzaf_6489555441274595329.plus.aac.p.m4a",
        duration: 175,
      },
      {
        id: "fp8",
        name: "Guilty (feat. Karan Aujla)",
        artist: "Inder Chahal",
        album: "Guilty (feat. Karan Aujla) - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/06/7d/06/067d0673-d9ca-fbe4-e09d-e136fc02cdda/8905285020236.png/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/37/6d/eb/376debbb-94fa-c88e-f834-0fbf1636f231/mzaf_4376882822508782977.plus.aac.p.m4a",
        duration: 178,
      },
      {
        id: "fp9",
        name: "Chandigarh Walian (Studio)",
        artist: "Sharan Deol",
        album: "Chandigarh Walian - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e5/4c/6f/e54c6ff4-028c-a0e3-3e79-7c147914c81e/8902356508556_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/36/a5/9136a5ad-0a32-96c1-f2d1-0ac9ce4c1ef3/mzaf_5275967797768747591.plus.aac.p.m4a",
        duration: 250,
      },
      {
        id: "fp10",
        name: "Antidote",
        artist: "Karan Aujla",
        album: "Four Me (Apple Music Edition) - EP",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c2/ce/a0/c2cea088-dbde-43db-346f-e536058fdcfb/5063483978438_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/83/fd/0a/83fd0a07-7fc9-e07e-520f-ce8ca4327acc/mzaf_14841514026491120213.plus.aac.p.m4a",
        duration: 187,
      },
      {
        id: "fp11",
        name: "Fallin Apart",
        artist: "Karan Aujla & Ikky",
        album: "Four You - EP",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fc/bc/64/fcbc6417-8a88-7b5e-4490-8f53e537ffb0/859770181552_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d3/5a/06/d35a0601-498e-0509-e02d-d8813ae8669b/mzaf_1742394590866445951.plus.aac.p.m4a",
        duration: 198,
      },
      {
        id: "fp12",
        name: "On My Way (Da Tweekaz Remix)",
        artist: "Alan Walker, Sabrina Carpenter & Farruko",
        album: "On My Way (Da Tweekaz Remix) - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4b/83/31/4b8331ab-e75b-1e73-30dc-2511b1c93463/886447816639.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b2/85/49/b28549a1-db17-cf5d-8442-9a6cb4810ab9/mzaf_359154721032886178.plus.aac.p.m4a",
        duration: 204,
      },
      {
        id: "fp13",
        name: "Main Tan Vi Pyar Kardan (feat. Millind Gaba)",
        artist: "Happy Raikoti",
        album: "Main Tan Vi Pyar Kardan - Single (feat. Millind Gaba) - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/17/f8/fd/17f8fd45-a429-8680-e002-5573f85386d0/8902633271012.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5e/c5/51/5ec55105-1d1a-71ba-119b-67fd3dd2e0b8/mzaf_12610446415112806540.plus.aac.p.m4a",
        duration: 264,
      },
      {
        id: "fp14",
        name: "The Last Ride",
        artist: "Sidhu Moose Wala",
        album: "The Last Ride - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/db/2c/84/db2c84f2-f42f-af93-2709-6158995f9f72/810105712582_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f9/db/be/f9dbbefa-0600-ad3f-6a71-32d17c9e7040/mzaf_5987343399381681108.plus.aac.p.m4a",
        duration: 262,
      },
      {
        id: "fp15",
        name: "Golgappe Vs Daru",
        artist: "Karan Aujla",
        album: "Golgappe Vs Daru - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/37/8a/b4/378ab417-a473-683f-871a-69c73b79d197/859731514030.png/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d6/34/1e/d6341e53-de89-d6ad-a87c-244e5267f5d1/mzaf_15487511418644668895.plus.aac.p.m4a",
        duration: 189,
      },
      {
        id: "fp16",
        name: "Hale Dil (Acoustic)",
        artist: "Harshit Saxena",
        album: "Murder 2 (Original Motion Picture Soundtrack)",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/bb/cc/4b/bbcc4bd9-b705-8cff-d637-6379ac87b9a6/8902894695916_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/59/13/71/5913719e-007d-7de5-cb3b-376151cd097c/mzaf_6403928388222920700.plus.aac.p.m4a",
        duration: 300,
      },
      {
        id: "fp17",
        name: "Invincible (feat. Stefflon Don)",
        artist: "Sidhu Moose Wala & Stefflon Don",
        album: "Moosetape",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/69/58/976958ae-725e-bd41-6755-f0921c697840/810063889609_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fc/9e/16/fc9e1655-a409-9be9-25c4-257e4abf1c66/mzaf_14899697995214735526.plus.aac.p.m4a",
        duration: 244,
      },
      {
        id: "fp18",
        name: "Na Na Na",
        artist: "Karan Aujla",
        album: "Na Na Na - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6a/d7/9e/6ad79e66-9401-5f95-9891-1dce8cef44f9/859731511640_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/70/5d/dc/705ddcea-aea9-8cf3-2528-2454860ca4d5/mzaf_1262199982154045993.plus.aac.p.m4a",
        duration: 207,
      },
      {
        id: "fp19",
        name: "Carol of the Bells",
        artist: "Lindsey Stirling",
        album: "Warmer In The Winter (Deluxe Edition)",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a0/62/98/a06298d3-7311-946a-0e5f-adcbef7458d1/18CRGIM06446.rgb.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c9/81/6f/c9816ff5-a0d6-ad11-d302-90953fc4a2ad/mzaf_17209183580582284760.plus.aac.p.m4a",
        duration: 168,
      },
      {
        id: "fp20",
        name: "Soch",
        artist: "Harrdy Sandhu & B. Praak",
        album: "Soch - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ff/e3/bd/ffe3bdfa-ecaa-85ba-99d4-dd3c89b1c945/8902894354905_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/65/8f/e4/658fe4b4-207f-71a2-8aad-d063e7c16d4f/mzaf_12662436654393664330.plus.aac.p.m4a",
        duration: 347,
      },
      {
        id: "fp21",
        name: "Roundtable Rival",
        artist: "Lindsey Stirling",
        album: "Shatter Me",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c1/c1/6c/c1c16cba-6ed6-eda1-8abf-0487e1e2bd9d/0.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9d/59/3a/9d593aa9-7918-18a3-f568-17013a228722/mzaf_272275077450260672.plus.aac.p.m4a",
        duration: 203,
      },
      {
        id: "fp22",
        name: "Smile for You",
        artist: "Vicki Vox",
        album: "Smile for You - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/95/f0/72/95f07247-1c1d-f2a2-65b7-1ca5e7528008/7330178076105.png/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ac/14/ca/ac14cabf-806a-53a5-c164-d7fbb5df8855/mzaf_4088450038442985208.plus.aac.p.m4a",
        duration: 171,
      },
      {
        id: "tw1",
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/19/d6/60/19d660ff-e3a9-8377-15a3-ce4b28e89cac/mzaf_18422426156481158187.plus.aac.p.m4a",
        duration: 200,
      },
      {
        id: "tw2",
        name: "Starboy (feat. Daft Punk)",
        artist: "The Weeknd",
        album: "Starboy",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/71/d6/1171d6ad-3c96-e027-2af6-58028426588c/mzaf_15137631797407745471.plus.aac.p.m4a",
        duration: 230,
      },
      {
        id: "tw3",
        name: "The Hills",
        artist: "The Weeknd",
        album: "Beauty Behind the Madness",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/30/05/1e/30051e57-a63a-3acc-4b30-42568293f5f7/15UMGIM36514.rgb.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0b/70/c8/0b70c898-ec23-3131-5d17-aa7417045013/mzaf_3059117378996578649.plus.aac.p.m4a",
        duration: 242,
      }
    ],
  },
  {
    id: "moosetape-essentials",
    name: "Essential: Moosetape",
    description: "Sidhu Moose Wala essentials",
    coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/69/58/976958ae-725e-bd41-6755-f0921c697840/810063889609_cover.jpg/600x600bb.jpg",
    tracks: [
      {
        id: "ms1",
        name: "So High",
        artist: "Sidhu Moose Wala",
        album: "So High - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/1b/6e/74/1b6e74cd-b93a-5dd9-e7a2-c7623df73d10/cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cf/6f/b6/cf6fb600-051d-66f2-4acb-df0259000b60/mzaf_13129631117141800671.plus.aac.p.m4a",
        duration: 234,
      },
      {
        id: "ms2",
        name: "Same Beef",
        artist: "Bohemia & Sidhu Moose Wala",
        album: "Same Beef - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fe/c6/13/fec61345-4a34-8056-aff4-77d7ee71fabf/SameBeef_Inlay-_Itunes.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/73/50/a2/7350a22e-c82f-5f73-a5ab-f6ebfaeb740b/mzaf_16018650222916631510.plus.aac.p.m4a",
        duration: 290,
      },
      {
        id: "ms3",
        name: "295",
        artist: "Sidhu Moose Wala",
        album: "Moosetape",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/69/58/976958ae-725e-bd41-6755-f0921c697840/810063889609_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7f/f3/6d/7ff36d63-b933-3993-cd2f-f3fd770c3763/mzaf_12675758250838366519.plus.aac.p.m4a",
        duration: 270,
      },
      {
        id: "ms4",
        name: "G-Shit (feat. Blockboi Twitch)",
        artist: "Sidhu Moose Wala & Blockboi Twitch",
        album: "Moosetape",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/69/58/976958ae-725e-bd41-6755-f0921c697840/810063889609_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/21/b4/e2/21b4e2e7-0cee-6f5f-2feb-07914a73e628/mzaf_12599394536846486457.plus.aac.p.m4a",
        duration: 234,
      },
      {
        id: "ms5",
        name: "Calaboose",
        artist: "Sidhu Moose Wala",
        album: "Moosetape",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/69/58/976958ae-725e-bd41-6755-f0921c697840/810063889609_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/16/52/a4/1652a4c5-4df0-8303-5e58-a196ef6addb2/mzaf_16037221702903538000.plus.aac.p.m4a",
        duration: 243,
      },
      {
        id: "ms6",
        name: "GOAT",
        artist: "Sidhu Moose Wala & Wazir Patar",
        album: "Moosetape",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/69/58/976958ae-725e-bd41-6755-f0921c697840/810063889609_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ec/b6/70/ecb67024-88fd-d12f-286e-85a3509ad14a/mzaf_12387767879770096725.plus.aac.p.m4a",
        duration: 215,
      },
      {
        id: "ms7",
        name: "Bambiha Bole (feat. Sidhu Moose Wala)",
        artist: "Amrit Maan & Sidhu Moose Wala",
        album: "Bambiha Bole (feat. Sidhu Moose Wala) - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0a/3e/3d/0a3e3de6-e691-3636-7545-fd373f705345/810059349650_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a8/a5/ff/a8a5ffdc-fecd-7517-c190-4d8d0511d11d/mzaf_9604887160553287817.plus.aac.p.m4a",
        duration: 301,
      },
      {
        id: "ms8",
        name: "Levels",
        artist: "Sidhu Moose Wala & Sunny Malton",
        album: "Levels - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/cf/b4/46cfb402-6d5c-1e4a-9efd-5759553ec8b8/810105713220_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bb/3f/95/bb3f95e3-e8c3-8e0a-5cf1-6a746eaed0b9/mzaf_14515648029493480786.plus.aac.p.m4a",
        duration: 229,
      },
      {
        id: "ms9",
        name: "Chorni",
        artist: "DIVINE & Sidhu Moose Wala",
        album: "Chorni - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d8/b9/a4/d8b9a47c-fc66-7d56-81cd-1e529b35f068/197189351020.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cf/7f/a1/cf7fa130-2d00-d5ec-d798-e151a27e4fe7/mzaf_9947265046588560989.plus.aac.p.m4a",
        duration: 181,
      },
      {
        id: "ms10",
        name: "Old Skool",
        artist: "Prem Dhillon, Sidhu Moose Wala & Naseeb",
        album: "Old Skool - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/c2/f2/88c2f2d9-5def-9dc5-2e09-c01e748fa0ff/810059345621_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/db/04/28/db0428e1-4788-6188-71d6-421f52ddf4bf/mzaf_8756680166019208874.plus.aac.p.m4a",
        duration: 253,
      },
      {
        id: "ms11",
        name: "These Days (feat. Bohemia)",
        artist: "Sidhu Moose Wala & Bohemia",
        album: "Moosetape",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/69/58/976958ae-725e-bd41-6755-f0921c697840/810063889609_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b1/f8/9d/b1f89db9-df04-eca4-6f39-a27ecdf44ddf/mzaf_9939269907281896174.plus.aac.p.m4a",
        duration: 209,
      },
      {
        id: "fp1",
        name: "Dark Love",
        artist: "Sidhu Moose Wala",
        album: "Dark Love - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/3c/ce/cb/3ccecba1-52f8-3aef-29c7-29a5c6a64b14/cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/32/43/6f/32436f25-2771-7dcb-a575-39c9f6907ee6/mzaf_14145901939970646340.plus.aac.p.m4a",
        duration: 305,
      },
      {
        id: "fp14",
        name: "The Last Ride",
        artist: "Sidhu Moose Wala",
        album: "The Last Ride - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/db/2c/84/db2c84f2-f42f-af93-2709-6158995f9f72/810105712582_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f9/db/be/f9dbbefa-0600-ad3f-6a71-32d17c9e7040/mzaf_5987343399381681108.plus.aac.p.m4a",
        duration: 262,
      },
      {
        id: "fp17",
        name: "Invincible (feat. Stefflon Don)",
        artist: "Sidhu Moose Wala & Stefflon Don",
        album: "Moosetape",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/69/58/976958ae-725e-bd41-6755-f0921c697840/810063889609_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fc/9e/16/fc9e1655-a409-9be9-25c4-257e4abf1c66/mzaf_14899697995214735526.plus.aac.p.m4a",
        duration: 244,
      }
    ],
  },
  // {
  //   id: "the-weeknd-essentials",
  //   name: "For Her",
  //   description: "Dark R&B, synth-pop classics, and global chart-toppers",
  //   coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/600x600bb.jpg",
  //   tracks: [
  //     {
  //       id: "tw1",
  //       name: "Blinding Lights",
  //       artist: "The Weeknd",
  //       album: "After Hours",
  //       albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/600x600bb.jpg",
  //       previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/19/d6/60/19d660ff-e3a9-8377-15a3-ce4b28e89cac/mzaf_18422426156481158187.plus.aac.p.m4a",
  //       duration: 200,
  //     },
  //     {
  //       id: "tw2",
  //       name: "Starboy (feat. Daft Punk)",
  //       artist: "The Weeknd",
  //       album: "Starboy",
  //       albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg",
  //       previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/71/d6/1171d6ad-3c96-e027-2af6-58028426588c/mzaf_15137631797407745471.plus.aac.p.m4a",
  //       duration: 230,
  //     },
  //     {
  //       id: "tw3",
  //       name: "The Hills",
  //       artist: "The Weeknd",
  //       album: "Beauty Behind the Madness",
  //       albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/30/05/1e/30051e57-a63a-3acc-4b30-42568293f5f7/15UMGIM36514.rgb.jpg/600x600bb.jpg",
  //       previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0b/70/c8/0b70c898-ec23-3131-5d17-aa7417045013/mzaf_3059117378996578649.plus.aac.p.m4a",
  //       duration: 242,
  //     },
  //     {
  //       id: "tw4",
  //       name: "Die For You",
  //       artist: "The Weeknd",
  //       album: "Starboy",
  //       albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e2/61/f8/e261f8c1-73db-9a7a-c89e-1068f19970e0/16UMGIM67863.rgb.jpg/600x600bb.jpg",
  //       previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/50/50/1a/50501a86-bd74-e90d-8a56-68c9b5e6e7d6/mzaf_4588197682084244913.plus.aac.p.m4a",
  //       duration: 260,
  //     },
  //     {
  //       id: "tw5",
  //       name: "Save Your Tears",
  //       artist: "The Weeknd",
  //       album: "After Hours (Deluxe)",
  //       albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/83/3a/f7/833af71b-2e0c-3303-24f5-8f5c546c073b/20UMGIM21167.rgb.jpg/600x600bb.jpg",
  //       previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8b/38/17/8b3817e4-c0e9-7e02-2654-3e2ecee93603/mzaf_18415642125637540903.plus.aac.p.m4a",
  //       duration: 216,
  //     },
  //     {
  //       id: "tw6",
  //       name: "Can't Feel My Face",
  //       artist: "The Weeknd",
  //       album: "Beauty Behind the Madness",
  //       albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/40/cd/1a/40cd1a65-7948-eb96-74c6-1c4b3497456c/15UMGIM36513.rgb.jpg/600x600bb.jpg",
  //       previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1e/cd/50/1ecd50b2-343b-c570-d976-7e089e56e0a5/mzaf_7391966967236748397.plus.aac.p.m4a",
  //       duration: 214,
  //     },
  //     {
  //       id: "tw7",
  //       name: "Call Out My Name",
  //       artist: "The Weeknd",
  //       album: "My Dear Melancholy,",
  //       albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2a/aa/b4/2aaab42a-a4cb-a600-4a25-d78961495960/18UMGIM17204.rgb.jpg/600x600bb.jpg",
  //       previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d1/2f/3d/d12f3d43-a2e2-eba4-8db5-91f3f3c13f5a/mzaf_8470584399239689698.plus.aac.p.m4a",
  //       duration: 228,
  //     },
  //     {
  //       id: "tw8",
  //       name: "I Feel It Coming (feat. Daft Punk)",
  //       artist: "The Weeknd",
  //       album: "Starboy",
  //       albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e2/61/f8/e261f8c1-73db-9a7a-c89e-1068f19970e0/16UMGIM67863.rgb.jpg/600x600bb.jpg",
  //       previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/71/af/e0/71afe07f-aae7-c4f0-db02-c05be07591d2/mzaf_5960554915698764959.plus.aac.p.m4a",
  //       duration: 269,
  //     },
  //     {
  //       id: "tw9",
  //       name: "After Hours",
  //       artist: "The Weeknd",
  //       album: "After Hours",
  //       albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/600x600bb.jpg",
  //       previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/54/2b/61/542b6133-80f7-f30f-4dcf-059490db9d84/mzaf_1539067797902127760.plus.aac.p.m4a",
  //       duration: 361,
  //     },
  //     {
  //       id: "tw10",
  //       name: "One Of The Girls",
  //       artist: "The Weeknd, JENNIE & Lily Rose Depp",
  //       album: "The Idol Episode 4 (Music from the HBO Original Series) - Single",
  //       albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/db/28/e7/db28e7c3-f53a-76c8-eaa4-d92a22e4f160/23UMGIM72115.rgb.jpg/600x600bb.jpg",
  //       previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9e/2f/1f/9e2f1f11-20a8-767a-0e33-9029028a7024/mzaf_1603981766065362477.plus.aac.p.m4a",
  //       duration: 245,
  //     },
  //     {
  //       id: "tw11",
  //       name: "I Was Never There",
  //       artist: "The Weeknd & Gesaffelstein",
  //       album: "My Dear Melancholy,",
  //       albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2a/aa/b4/2aaab42a-a4cb-a600-4a25-d78961495960/18UMGIM17204.rgb.jpg/600x600bb.jpg",
  //       previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f5/af/de/f5afde85-49ec-d07a-94b8-561d6fd0695f/mzaf_1634234024178578725.plus.aac.p.m4a",
  //       duration: 241,
  //     }
  //   ],
  // },
  {
    id: "karan-aujla",
    name: "For Me",
    description: "Softly, antidotes, and P-POP energy",
    coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg",
    tracks: [
      {
        id: "ka3",
        name: "Winning Speech",
        artist: "Karan Aujla & MXRCI",
        album: "Winning Speech - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e3/ae/b6/e3aeb64f-cadd-5830-c39f-6af51cd91670/mzaf_6001527501800958065.plus.aac.p.m4a",
        duration: 227,
      },
      {
        id: "ka2",
        name: "Admirin' You (feat. Preston Pablo)",
        artist: "Karan Aujla & Ikky",
        album: "Making Memories",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1e/93/c4/1e93c4d4-0367-c423-6faa-51af078e501b/mzaf_2676653675471599457.plus.aac.p.m4a",
        duration: 215,
      },
      {
        id: "ka4",
        name: "Players (Dj Labbeey Remix)",
        artist: "Karan Aujla & Badshah",
        album: "Players - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e5/fb/c0/e5fbc0ac-8f7c-baed-45e6-24e19527d467/5063268199263_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/24/f4/50/24f45056-b634-7f86-822b-f62697f5e1af/mzaf_16581374010483249417.plus.aac.p.m4a",
        duration: 218,
      },
      {
        id: "ka6",
        name: "Jee Ni Lagda",
        artist: "Karan Aujla & Ikky",
        album: "Making Memories",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2c/5b/cc/2c5bccd1-fefa-cec7-c3bd-f63692fa0a29/mzaf_8819850076957864344.plus.aac.p.m4a",
        duration: 139,
      },
      {
        id: "ka7",
        name: "For A Reason",
        artist: "Karan Aujla & Ikky",
        album: "P-POP CULTURE",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/06/bd/e1/06bde161-335b-87fa-650a-f0d04bd9f55d/5021732889621.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/88/c6/5b/88c65b26-c766-69d3-2603-4857e66903d4/mzaf_7154011662261729475.plus.aac.p.m4a",
        duration: 180,
      },
      {
        id: "fp3",
        name: "Y.D.G",
        artist: "Karan Aujla & YEAH PROOF",
        album: "Four Me (Apple Music Edition) - EP",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c2/ce/a0/c2cea088-dbde-43db-346f-e536058fdcfb/5063483978438_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4e/aa/b0/4eaab001-d481-9bce-ecd3-11cbfb210a3b/mzaf_5963655609452342455.plus.aac.p.m4a",
        duration: 172,
      },
      {
        id: "fp10",
        name: "Antidote",
        artist: "Karan Aujla",
        album: "Four Me (Apple Music Edition) - EP",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c2/ce/a0/c2cea088-dbde-43db-346f-e536058fdcfb/5063483978438_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/83/fd/0a/83fd0a07-7fc9-e07e-520f-ce8ca4327acc/mzaf_14841514026491120213.plus.aac.p.m4a",
        duration: 187,
      },
      {
        id: "fp11",
        name: "Fallin Apart",
        artist: "Karan Aujla & Ikky",
        album: "Four You - EP",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fc/bc/64/fcbc6417-8a88-7b5e-4490-8f53e537ffb0/859770181552_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d3/5a/06/d35a0601-498e-0509-e02d-d8813ae8669b/mzaf_1742394590866445951.plus.aac.p.m4a",
        duration: 198,
      },
      {
        id: "fp15",
        name: "Golgappe Vs Daru",
        artist: "Karan Aujla",
        album: "Golgappe Vs Daru - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/37/8a/b4/378ab417-a473-683f-871a-69c73b79d197/859731514030.png/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d6/34/1e/d6341e53-de89-d6ad-a87c-244e5267f5d1/mzaf_15487511418644668895.plus.aac.p.m4a",
        duration: 189,
      },
      {
        id: "fp18",
        name: "Na Na Na",
        artist: "Karan Aujla",
        album: "Na Na Na - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6a/d7/9e/6ad79e66-9401-5f95-9891-1dce8cef44f9/859731511640_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/70/5d/dc/705ddcea-aea9-8cf3-2528-2454860ca4d5/mzaf_1262199982154045993.plus.aac.p.m4a",
        duration: 207,
      },
      {
        id: "ka1",
        name: "Softly",
        artist: "Karan Aujla & Ikky",
        album: "Making Memories",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5f/6f/01/5f6f0130-6567-22d4-bc1a-5ccb359c3fac/mzaf_5497113703334703756.plus.aac.p.m4a",
        duration: 155,
      },
    ],
  },
  {
    id: "judaa-classic",
    name: "Classic: Judaa",
    description: "Amrinder Gill era classics and vibes",
    coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/67/c7/5967c7bf-ad65-97fe-5a70-aa3c4dabea6f/artwork.jpg/600x600bb.jpg",
    tracks: [
      {
        id: "jd1",
        name: "Judaa 3 Title Track",
        artist: "Amrinder Gill & Dr Zeus",
        album: "Judaa 3 Title Track - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/67/c7/5967c7bf-ad65-97fe-5a70-aa3c4dabea6f/artwork.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c7/74/c7/c774c775-22de-c696-78a7-2074345cd4be/mzaf_5418119077430299994.plus.aac.p.m4a",
        duration: 227,
      },
      {
        id: "jd2",
        name: "Mera Deewanapan",
        artist: "Dr Zeus & Amrinder Gill",
        album: "Judaa 2",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/43/eb/d4/43ebd4da-efb7-744a-e048-c5a951707c1e/859711927829_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9e/54/aa/9e54aaa6-7d20-3da4-3370-83408f1f9544/mzaf_11713503555048253873.plus.aac.p.m4a",
        duration: 243,
      },
      {
        id: "jd3",
        name: "Sohni Kuri",
        artist: "Amrinder Gill",
        album: "Dildarian",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/1b/e0/7f/1be07f88-3a65-f13c-1358-c6fc5a4a0a91/886788622807.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/9d/e7/919de796-8f61-3a3f-1073-c324c22a1724/mzaf_8305900804610022986.plus.aac.p.m4a",
        duration: 238,
      },
      {
        id: "jd8",
        name: "Mera Deewanapan",
        artist: "Dr Zeus & Amrinder Gill",
        album: "Judaa 2",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/43/eb/d4/43ebd4da-efb7-744a-e048-c5a951707c1e/859711927829_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9e/54/aa/9e54aaa6-7d20-3da4-3370-83408f1f9544/mzaf_11713503555048253873.plus.aac.p.m4a",
        duration: 243,
      },
      {
        id: "jd9",
        name: "Coffee",
        artist: "Amrinder Gill, Jasmeen Akhtar & Raj Ranjodh",
        album: "Coffee - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1f/f6/6f/1ff66f43-12b8-3eda-4cf5-3051d6262b42/22a1d83c-0577-4a18-a23b-690c66ef21ef.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b7/46/f5/b746f50c-c572-19a1-a5d7-d0314f21b13a/mzaf_3499908869310261462.plus.aac.p.m4a",
        duration: 165,
      },
      {
        id: "jd10",
        name: "Asi Gabru Punjabi",
        artist: "Amrinder Gill",
        album: "Judda",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/37/7b/ab/377bab5f-00f9-02bc-0c0c-f7b3b1936c07/8902633270060.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/64/af/c6/64afc6e8-6b33-e537-adb5-4e932ad20789/mzaf_17787382787523120921.plus.aac.p.m4a",
        duration: 228,
      }
    ],
  },
  {
    id: "punjabi-singles",
    name: "Punjabi Singles",
    description: "Chart-leaning Punjabi hits",
    coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ac/6a/5d/ac6a5d85-08b5-e89a-3585-d222ee09a8ab/5060277674125.jpg/600x600bb.jpg",
    tracks: [
      {
        id: "mx4",
        name: "Daru Badnaam (feat. Pratik Studio)",
        artist: "Param Singh & Kamal Kahlon",
        album: "Daru Badnaam (feat. Pratik Studio) - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ac/6a/5d/ac6a5d85-08b5-e89a-3585-d222ee09a8ab/5060277674125.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/71/a4/76/71a476ea-b063-8486-8640-90faa978c35f/mzaf_1382162417360433686.plus.aac.p.m4a",
        duration: 185,
      },
      {
        id: "mx5",
        name: "Illegal Weapon (feat. Jasmine Sandlas)",
        artist: "Garry Sandhu",
        album: "Illegal Weapon (feat. Jasmine Sandlas) - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/38/68/c7/3868c742-afd3-1c84-5d45-a4bb9d5ea515/cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4c/5c/42/4c5c42c4-06ae-3903-1a4d-2bd0753bb7c2/mzaf_7374768085243450835.plus.aac.p.m4a",
        duration: 230,
      },
      {
        id: "mx6",
        name: "3 Peg-Label Black (From \"T-Series Mixtape Punjabi\")",
        artist: "Sharry Maan, Gupz Sehra, Abhijit Vaghani & Mista Baaz",
        album: "3 Peg-Label Black (From \"T-Series Mixtape Punjabi\") - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/34/26/63/34266382-5074-5b67-b982-abedc04cb224/8903431660367_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0e/9d/ee/0e9deed3-6e00-7671-1abd-32384bcc3746/mzaf_7929833128214933464.plus.aac.p.m4a",
        duration: 206,
      },
      {
        id: "mx7",
        name: "Qismat",
        artist: "Ammy Virk",
        album: "Jaani & B Praak Hits",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/09/50/11/095011d5-169c-6d0e-08b0-dc33bbc1a190/8902633284760.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4f/28/8e/4f288e45-944b-0658-53b6-7db53739d6a0/mzaf_2471952582960686958.plus.aac.p.m4a",
        duration: 244,
      },
      {
        id: "mx8",
        name: "Sakhiyaan",
        artist: "Maninder Buttar",
        album: "Sakhiyaan - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1d/fd/6d/1dfd6db7-c264-81a9-964c-9394243c7dd7/cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/46/bf/6d/46bf6d24-4c67-44da-3790-f52ff5a4cae6/mzaf_5418881096585432337.plus.aac.p.m4a",
        duration: 179,
      },
      {
        id: "mx1",
        name: "Suit Suit (feat. Arjun) [From \"Hindi Medium\"]",
        artist: "Guru Randhawa",
        album: "Hits of Guru Randhawa",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/10/60/3f/10603f32-7127-72b5-f95e-a36e9937eb35/8903431656599_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f3/4d/48/f34d4839-90b5-730c-b116-7d1c32e60228/mzaf_6198682250574026402.plus.aac.p.m4a",
        duration: 190,
      },
      {
        id: "mx2",
        name: "Lahore (From \"Lahore\")",
        artist: "Guru Randhawa",
        album: "All Time Hits Guru Randhawa Birthday Special",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/10/5e/07105e5c-533b-d6c6-6374-15dfd05b564e/8903431895608_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cd/b7/87/cdb787cb-edaf-917b-541c-74730d330d2e/mzaf_12088338128028828075.plus.aac.p.m4a",
        duration: 197,
      },
      {
        id: "mx3",
        name: "High Rated Gabru (From \"High Rated Gabru\")",
        artist: "Guru Randhawa",
        album: "High Rated Gabru - Guru Randhawa",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c0/c9/31/c0c93141-f4fe-33f3-be2c-d082005451b9/8903431713704_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fd/1b/3e/fd1b3e9d-e52b-4655-d7a0-aeeb76a7ff19/mzaf_18013849595002019802.plus.aac.p.m4a",
        duration: 214,
      },
      {
        id: "fp2",
        name: "Badnam",
        artist: "Mankirt Aulakh",
        album: "Badnam - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/69/7e/76/697e76e1-61a3-ac09-0df2-655f426c0bb6/8902633274853.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/29/73/c9/2973c91f-71ad-568c-5e54-362e2acb6c1a/mzaf_2613698502860216184.plus.aac.p.m4a",
        duration: 119,
      },
      {
        id: "fp7",
        name: "Backbone",
        artist: "Harrdy Sandhu",
        album: "Backbone - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e2/64/0e/e2640e95-17c6-3924-8717-5cf87fceebc2/886446309828.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0c/f5/f4/0cf5f4fd-df54-d64c-da79-d39d3f4bf0c7/mzaf_6489555441274595329.plus.aac.p.m4a",
        duration: 175,
      },
      {
        id: "fp20",
        name: "Soch",
        artist: "Harrdy Sandhu & B. Praak",
        album: "Soch - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ff/e3/bd/ffe3bdfa-ecaa-85ba-99d4-dd3c89b1c945/8902894354905_cover.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/65/8f/e4/658fe4b4-207f-71a2-8aad-d063e7c16d4f/mzaf_12662436654393664330.plus.aac.p.m4a",
        duration: 347,
      }
    ],
  },
  {
    id: "violin-and-vibes",
    name: "Violin & Vibes",
    description: "Lindsey Stirling cuts in the mix",
    coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c1/c1/6c/c1c16cba-6ed6-eda1-8abf-0487e1e2bd9d/0.jpg/600x600bb.jpg",
    tracks: [
      {
        id: "ls1",
        name: "Shatter Me (feat. Lzzy Hale)",
        artist: "Lindsey Stirling",
        album: "Shatter Me",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c1/c1/6c/c1c16cba-6ed6-eda1-8abf-0487e1e2bd9d/0.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/09/9d/dd/099dddd4-d2ae-0aa4-1d75-3bd8e7720314/mzaf_9419400834665160386.plus.aac.p.m4a",
        duration: 281,
      },
      {
        id: "ls2",
        name: "Crystallize",
        artist: "Lindsey Stirling",
        album: "Lindsey Stirling (Deluxe)",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d4/86/e1/d486e134-ed20-f55a-4fee-4ce39b58f120/0.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/dd/db/bf/dddbbf5e-3c08-0929-a3de-3322584a4a8d/mzaf_15044339236452525210.plus.aac.p.m4a",
        duration: 259,
      },
      {
        id: "fp19",
        name: "Carol of the Bells",
        artist: "Lindsey Stirling",
        album: "Warmer In The Winter (Deluxe Edition)",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a0/62/98/a06298d3-7311-946a-0e5f-adcbef7458d1/18CRGIM06446.rgb.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c9/81/6f/c9816ff5-a0d6-ad11-d302-90953fc4a2ad/mzaf_17209183580582284760.plus.aac.p.m4a",
        duration: 168,
      },
      {
        id: "fp21",
        name: "Roundtable Rival",
        artist: "Lindsey Stirling",
        album: "Shatter Me",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c1/c1/6c/c1c16cba-6ed6-eda1-8abf-0487e1e2bd9d/0.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9d/59/3a/9d593aa9-7918-18a3-f568-17013a228722/mzaf_272275077450260672.plus.aac.p.m4a",
        duration: 203,
      },
      {
        id: "fp22",
        name: "Smile for You",
        artist: "Vicki Vox",
        album: "Smile for You - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/95/f0/72/95f07247-1c1d-f2a2-65b7-1ca5e7528008/7330178076105.png/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ac/14/ca/ac14cabf-806a-53a5-c164-d7fbb5df8855/mzaf_4088450038442985208.plus.aac.p.m4a",
        duration: 171,
      },
      {
        id: "fp5",
        name: "Criminal",
        artist: "Britney Spears",
        album: "Femme Fatale (Deluxe Version)",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f6/b5/e1/f6b5e110-5ae3-1db4-ae81-e8d59d0e1c92/884977898842.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bb/e9/ad/bbe9ad70-3141-951d-49f3-d7d2045f855c/mzaf_2723233998202938723.plus.aac.p.m4a",
        duration: 225,
      },
      {
        id: "fp12",
        name: "On My Way (Da Tweekaz Remix)",
        artist: "Alan Walker, Sabrina Carpenter & Farruko",
        album: "On My Way (Da Tweekaz Remix) - Single",
        albumArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4b/83/31/4b8331ab-e75b-1e73-30dc-2511b1c93463/886447816639.jpg/600x600bb.jpg",
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b2/85/49/b28549a1-db17-cf5d-8442-9a6cb4810ab9/mzaf_359154721032886178.plus.aac.p.m4a",
        duration: 204,
      }
    ],
  }
];

// Get all unique albums from playlists
export function getAlbumsFromPlaylists(): {
  id: string;
  name: string;
  artist: string;
  albumArt: string;
  trackCount: number;
}[] {
  const albumMap = new Map<
    string,
    { id: string; name: string; artist: string; albumArt: string; trackCount: number }
  >();

  for (const playlist of DEFAULT_PLAYLISTS) {
    for (const track of playlist.tracks) {
      const albumKey = `${track.album}-${track.artist}`;
      if (!albumMap.has(albumKey)) {
        albumMap.set(albumKey, {
          id: albumKey,
          name: track.album,
          artist: track.artist,
          albumArt: track.albumArt,
          trackCount: 1,
        });
      } else {
        const album = albumMap.get(albumKey);
        if (album) {
          album.trackCount++;
        }
      }
    }
  }

  return Array.from(albumMap.values());
}

// Get all unique artists from playlists
export function getArtistsFromPlaylists(): {
  id: string;
  name: string;
  image: string;
  trackCount: number;
}[] {
  const artistMap = new Map<
    string,
    { id: string; name: string; image: string; trackCount: number }
  >();

  for (const playlist of DEFAULT_PLAYLISTS) {
    for (const track of playlist.tracks) {
      if (!artistMap.has(track.artist)) {
        artistMap.set(track.artist, {
          id: track.artist.toLowerCase().replace(/\s+/g, "-"),
          name: track.artist,
          image: track.albumArt,
          trackCount: 1,
        });
      } else {
        const artist = artistMap.get(track.artist);
        if (artist) {
          artist.trackCount++;
        }
      }
    }
  }

  return Array.from(artistMap.values());
}

// Get all songs from playlists
export function getAllSongs() {
  const songs = new Map<string, (typeof DEFAULT_PLAYLISTS)[0]["tracks"][0]>();

  for (const playlist of DEFAULT_PLAYLISTS) {
    for (const track of playlist.tracks) {
      if (!songs.has(track.id)) {
        songs.set(track.id, track);
      }
    }
  }

  return Array.from(songs.values());
}

// Get the featured playlist
export function getFeaturedPlaylist() {
  return DEFAULT_PLAYLISTS.find((p) => p.is_featured) || DEFAULT_PLAYLISTS[0];
}

// Default track for media widget when nothing has been played
export const DEFAULT_TRACK = DEFAULT_PLAYLISTS[0].tracks[0]; // Dark Love
