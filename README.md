Rick and morty challenge for an interview at Chipax

### Descripcion del reto

Tienes que consultar todos los `character`, `locations` y `episodes` de [https://rickandmortyapi.com/](https://rickandmortyapi.com/) e indicar:

1. Char counter:
    - cuántas veces aparece la letra **"l"** (case insensitive) en los nombres de todos los `location`
    - cuántas veces aparece la letra **"e"** (case insensitive) en los nombres de todos los `episode`
    - cuántas veces aparece la letra **"c"** (case insensitive) en los nombres de todos los `character`
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)
2. Episode locations:
    - para cada `episode`, indicar la cantidad y un listado con las `location` (`origin`) de todos los `character` que aparecieron en ese `episode` (sin repetir)
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)

### Resultados

1. Char Counter:
```
{
  exercise_name: "Char counter",
  time: "1s, 77.358ms",
  in_time: true,
  results: [
    {
      char: "e",
      resource: "episode",
      count: 88
    },
    {
      char: "c",
      resource: "character",
      count: 494
    },
    {
      char: "l",
      resource: "location",
      count: 82
    }
  ]
},
```

2. Episode Locations:
```
{
  exercise_name: "Episode locations",
  time: "0s, 773.707ms",
  in_time: true,
  results: [
      {
        name: "Pilot",
        episode: "S01E01",
        locations: [
          "Earth (C-137)",
          "unknown",
          "Bepis 9",
          "Gromflom Prime",
          "Girvonesk"
         ]
        },
        {
        name: "Lawnmower Dog",
        episode: "S01E02",
        locations: [
          "Earth (C-137)",
          "unknown",
          "Earth (Replacement Dimension)",
          "Mr. Goldenfold's dream",
          "Snuffles' Dream"
          ]
      },
      ...
   ]
}
```
