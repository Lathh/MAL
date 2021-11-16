import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import AlbumDetail from "../components/Album/AlbumDetail";
import AlbumTracks from "../components/Track/AlbumTracks";

function AlbumPage() {

  const { albumId } = useParams();

  useEffect(() => {
    async function getAlbumDetail() {
      try{
        const fetchRecipes = await fetch(`https://masakapahariini-api.eddypermana.com/api/search/?q=soto`)
        const recipes = await fetchRecipes.json();
        console.log(recipes.results);       
      } catch(error){
          console.log('getAlbumDetail', error);
      }
    }
    getAlbumDetail();
  }, [])

  useEffect(() => {
    async function getAlbumTracks() {
      try{
        const fetchRecipes = await fetch(`https://masakapahariini-api.eddypermana.com/api/search/?q=soto`)
        const recipes = await fetchRecipes.json();
        console.log(recipes.results);       
      } catch(error){
          console.log('getAlbumTracks', error);
      }
    }
    getAlbumTracks();
  }, [])

  const dummy_data={
      "id": "302127",
      "title": "Discovery",
      "upc": "724384960650",
      "link": "https://www.deezer.com/album/302127",
      "share": "https://www.deezer.com/album/302127?utm_source=deezer&utm_content=album-302127&utm_term=0_1636825033&utm_medium=web",
      "cover": "https://api.deezer.com/album/302127/image",
      "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
      "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
      "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
      "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
      "md5_image": "2e018122cb56986277102d2041a592c8",
      "genre_id": 113,
      "genres": {
        "data": [
          {
            "id": 113,
            "name": "Dance",
            "picture": "https://api.deezer.com/genre/113/image",
            "type": "genre"
          }
        ]
      },
      "label": "Daft Life Ltd./ADA France",
      "nb_tracks": 14,
      "duration": 3660,
      "fans": 247275,
      "release_date": "2001-03-07",
      "record_type": "album",
      "available": true,
      "tracklist": "https://api.deezer.com/album/302127/tracks",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 7,
      "explicit_content_cover": 0,
      "contributors": [
        {
          "id": 27,
          "name": "Daft Punk",
          "link": "https://www.deezer.com/artist/27",
          "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1636825033&utm_medium=web",
          "picture": "https://api.deezer.com/artist/27/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
          "radio": true,
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist",
          "role": "Main"
        }
      ],
      "artist": {
        "id": "27",
        "name": "Daft Punk",
        "picture": "https://api.deezer.com/artist/27/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
        "type": "artist"
      },
      "type": "album",
      "tracks": {
        "data": [
          {
            "id": "3135553",
            "readable": true,
            "title": "One More Time",
            "title_short": "One More Time",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135553",
            "duration": "320",
            "rank": "913564",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-9.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135554",
            "readable": true,
            "title": "Aerodynamic",
            "title_short": "Aerodynamic",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135554",
            "duration": "212",
            "rank": "697130",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 6,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-b.dzcdn.net/stream/c-b2e0166bba75a78251d6dca9c9c3b41a-7.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135555",
            "readable": true,
            "title": "Digital Love",
            "title_short": "Digital Love",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135555",
            "duration": "301",
            "rank": "686062",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-0.dzcdn.net/stream/c-01ef0c4982c94b86c7c0e6b2a70dde4b-7.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135556",
            "readable": true,
            "title": "Harder, Better, Faster, Stronger",
            "title_short": "Harder, Better, Faster, Stronger",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135556",
            "duration": "224",
            "rank": "784948",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135557",
            "readable": true,
            "title": "Crescendolls",
            "title_short": "Crescendolls",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135557",
            "duration": "211",
            "rank": "573842",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-0.dzcdn.net/stream/c-02585dc790f2904c4e870cb3bcecfcf3-8.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135558",
            "readable": true,
            "title": "Nightvision",
            "title_short": "Nightvision",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135558",
            "duration": "104",
            "rank": "499776",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 6,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-1.dzcdn.net/stream/c-155b4d90d3d16d951e3d67c297988edc-7.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135559",
            "readable": true,
            "title": "Superheroes",
            "title_short": "Superheroes",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135559",
            "duration": "237",
            "rank": "547086",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-3.dzcdn.net/stream/c-3d8caae0a1c59f417f31bb747c43818b-7.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135560",
            "readable": true,
            "title": "High Life",
            "title_short": "High Life",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135560",
            "duration": "201",
            "rank": "556766",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-8.dzcdn.net/stream/c-8052077a75a884e93bda2e2b63f74bbb-7.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135561",
            "readable": true,
            "title": "Something About Us",
            "title_short": "Something About Us",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135561",
            "duration": "232",
            "rank": "728441",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 6,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-9.dzcdn.net/stream/c-905aef3b23f4fb19db300a03f254fd6a-6.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135562",
            "readable": true,
            "title": "Voyager",
            "title_short": "Voyager",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135562",
            "duration": "227",
            "rank": "621147",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-9.dzcdn.net/stream/c-98625d3ad54e88765fdfb812de62e515-7.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135563",
            "readable": true,
            "title": "Veridis Quo",
            "title_short": "Veridis Quo",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135563",
            "duration": "345",
            "rank": "794261",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-f.dzcdn.net/stream/c-f6fde4f6f42bde740e3d07b019fde318-6.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135564",
            "readable": true,
            "title": "Short Circuit",
            "title_short": "Short Circuit",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135564",
            "duration": "206",
            "rank": "469931",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-6.dzcdn.net/stream/c-6ef3bfc9e8f226b582bade5842df4517-8.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135565",
            "readable": true,
            "title": "Face to Face",
            "title_short": "Face to Face",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135565",
            "duration": "240",
            "rank": "594139",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-7.dzcdn.net/stream/c-7af918cb131b9d5b8f5c1e40e62da91b-8.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135566",
            "readable": true,
            "title": "Too Long",
            "title_short": "Too Long",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135566",
            "duration": "600",
            "rank": "533537",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-d.dzcdn.net/stream/c-ddf495316e2afbe4327d9a6e17840a69-7.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
    }
  ]
}
  }

  const data={
    "data": [
      {
        "id": "3135553",
        "readable": true,
        "title": "One More Time",
        "title_short": "One More Time",
        "title_version": "",
        "isrc": "GBDUW0000053",
        "link": "https://www.deezer.com/track/3135553",
        "duration": "320",
        "track_position": 1,
        "disk_number": 1,
        "rank": "913564",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-9.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      },
      {
        "id": "3135554",
        "readable": true,
        "title": "Aerodynamic",
        "title_short": "Aerodynamic",
        "title_version": "",
        "isrc": "GBDUW0000057",
        "link": "https://www.deezer.com/track/3135554",
        "duration": "212",
        "track_position": 2,
        "disk_number": 1,
        "rank": "697130",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 6,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-b.dzcdn.net/stream/c-b2e0166bba75a78251d6dca9c9c3b41a-7.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      },
      {
        "id": "3135555",
        "readable": true,
        "title": "Digital Love",
        "title_short": "Digital Love",
        "title_version": "",
        "isrc": "GBDUW0000058",
        "link": "https://www.deezer.com/track/3135555",
        "duration": "301",
        "track_position": 3,
        "disk_number": 1,
        "rank": "686062",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-0.dzcdn.net/stream/c-01ef0c4982c94b86c7c0e6b2a70dde4b-7.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      },
      {
        "id": "3135556",
        "readable": true,
        "title": "Harder, Better, Faster, Stronger",
        "title_short": "Harder, Better, Faster, Stronger",
        "title_version": "",
        "isrc": "GBDUW0000059",
        "link": "https://www.deezer.com/track/3135556",
        "duration": "224",
        "track_position": 4,
        "disk_number": 1,
        "rank": "784948",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      },
      {
        "id": "3135557",
        "readable": true,
        "title": "Crescendolls",
        "title_short": "Crescendolls",
        "title_version": "",
        "isrc": "GBDUW0000060",
        "link": "https://www.deezer.com/track/3135557",
        "duration": "211",
        "track_position": 5,
        "disk_number": 1,
        "rank": "573842",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-0.dzcdn.net/stream/c-02585dc790f2904c4e870cb3bcecfcf3-8.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      },
      {
        "id": "3135558",
        "readable": true,
        "title": "Nightvision",
        "title_short": "Nightvision",
        "title_version": "",
        "isrc": "GBDUW0000061",
        "link": "https://www.deezer.com/track/3135558",
        "duration": "104",
        "track_position": 6,
        "disk_number": 1,
        "rank": "499776",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 6,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-1.dzcdn.net/stream/c-155b4d90d3d16d951e3d67c297988edc-7.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      },
      {
        "id": "3135559",
        "readable": true,
        "title": "Superheroes",
        "title_short": "Superheroes",
        "title_version": "",
        "isrc": "GBDUW0000062",
        "link": "https://www.deezer.com/track/3135559",
        "duration": "237",
        "track_position": 7,
        "disk_number": 1,
        "rank": "547086",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-3.dzcdn.net/stream/c-3d8caae0a1c59f417f31bb747c43818b-7.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      },
      {
        "id": "3135560",
        "readable": true,
        "title": "High Life",
        "title_short": "High Life",
        "title_version": "",
        "isrc": "GBDUW0000063",
        "link": "https://www.deezer.com/track/3135560",
        "duration": "201",
        "track_position": 8,
        "disk_number": 1,
        "rank": "556766",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-8.dzcdn.net/stream/c-8052077a75a884e93bda2e2b63f74bbb-7.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      },
      {
        "id": "3135561",
        "readable": true,
        "title": "Something About Us",
        "title_short": "Something About Us",
        "title_version": "",
        "isrc": "GBDUW0000064",
        "link": "https://www.deezer.com/track/3135561",
        "duration": "232",
        "track_position": 9,
        "disk_number": 1,
        "rank": "728441",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 6,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-9.dzcdn.net/stream/c-905aef3b23f4fb19db300a03f254fd6a-6.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      },
      {
        "id": "3135562",
        "readable": true,
        "title": "Voyager",
        "title_short": "Voyager",
        "title_version": "",
        "isrc": "GBDUW0000065",
        "link": "https://www.deezer.com/track/3135562",
        "duration": "227",
        "track_position": 10,
        "disk_number": 1,
        "rank": "621147",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-9.dzcdn.net/stream/c-98625d3ad54e88765fdfb812de62e515-7.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      },
      {
        "id": "3135563",
        "readable": true,
        "title": "Veridis Quo",
        "title_short": "Veridis Quo",
        "title_version": "",
        "isrc": "GBDUW0000066",
        "link": "https://www.deezer.com/track/3135563",
        "duration": "345",
        "track_position": 11,
        "disk_number": 1,
        "rank": "794261",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-f.dzcdn.net/stream/c-f6fde4f6f42bde740e3d07b019fde318-6.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      },
      {
        "id": "3135564",
        "readable": true,
        "title": "Short Circuit",
        "title_short": "Short Circuit",
        "title_version": "",
        "isrc": "GBDUW0000067",
        "link": "https://www.deezer.com/track/3135564",
        "duration": "206",
        "track_position": 12,
        "disk_number": 1,
        "rank": "469931",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-6.dzcdn.net/stream/c-6ef3bfc9e8f226b582bade5842df4517-8.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      },
      {
        "id": "3135565",
        "readable": true,
        "title": "Face to Face",
        "title_short": "Face to Face",
        "title_version": "",
        "isrc": "GBDUW0000068",
        "link": "https://www.deezer.com/track/3135565",
        "duration": "240",
        "track_position": 13,
        "disk_number": 1,
        "rank": "594139",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-7.dzcdn.net/stream/c-7af918cb131b9d5b8f5c1e40e62da91b-8.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      },
      {
        "id": "3135566",
        "readable": true,
        "title": "Too Long",
        "title_short": "Too Long",
        "title_version": "",
        "isrc": "GBDUW0000069",
        "link": "https://www.deezer.com/track/3135566",
        "duration": "600",
        "track_position": 14,
        "disk_number": 1,
        "rank": "533537",
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-d.dzcdn.net/stream/c-ddf495316e2afbe4327d9a6e17840a69-7.mp3",
        "md5_image": "2e018122cb56986277102d2041a592c8",
        "artist": {
          "id": "27",
          "name": "Daft Punk",
          "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
          "type": "artist"
        },
        "type": "track"
      }
    ],
    "total": 14
  }

    return (
        <Container fluid>
            <Row>
            </Row>
            <Row>
                <Col>
                    <AlbumDetail album={dummy_data} key={dummy_data.id}/>
                </Col>
            </Row>
            <Row>
                <AlbumTracks tracks={data.data} album={dummy_data}/>
            </Row>
        </Container>
    )
}

export default AlbumPage;