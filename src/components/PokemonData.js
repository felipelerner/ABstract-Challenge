import {
  Box,
  AspectRatio,
  Image,
  Stack,
  SimpleGrid,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Progress,
  Text,
  Tab,
  Badge,
  HStack,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import db from '../../db.json';


export default function PokemonData({ pokemon }) {

  var pokemonesatrapados = useState(db)  
  const [catchedPokemon] = pokemonesatrapados
  const [pokemonescatched, setpokemonescatched] = useState(catchedPokemon)
  const [pokemonCatched, setPokemonCatched] = useState([]);
  const [existe, setExiste] = useState()

  useEffect(() => {
  setpokemonescatched(pokemonescatched)
  //pokemonesatrapados = catchedPokemon.map(pokemones => pokemones)
  const existe = (pokemonescatched.some(item => item.name === pokemon.name));
  setExiste(existe)
  existe ? setPokemonCatched(true) : setPokemonCatched(false)

    }, [Catched, unCatched,]);

  function Catched(){
  console.log("yo te atrapo " + pokemon.name);
  pokemonescatched.map(poke => console.log(poke))
  pokemonCatched == false ? pokemonescatched.push({id:pokemon.id, name:pokemon.name}): alert("ya existe este pokemon");
  const existe = (pokemonescatched.some(item => item.name === pokemon.name));
  setExiste(true)
  setPokemonCatched(true);
 }


 function removeJsonAttr(pokemon) {
  setpokemonescatched(pokemonesatrapados)
  const indextoremove = pokemonescatched.findIndex((pl) => pl.id === pokemon.id);
  pokemonescatched.splice(indextoremove, 1);
  setpokemonescatched(pokemonesatrapados);
}

 function unCatched(){
  console.log("yo te suelto " + pokemon.name);
  setPokemonCatched(false);
  removeJsonAttr(pokemon);
 }

  return (
    <Stack spacing="5" pb="5">
      <Stack spacing="5" position="relative">
        <Box position="absolute" right="0" zIndex="99">
            <Button colorScheme={pokemonCatched==true ? "red" : "green" } onClick={pokemonCatched==true ? unCatched : Catched }>
             {`${pokemonCatched==true ? "Liberar" : "Atrapar" }`}
            </Button>

        </Box>
        <AspectRatio w="full" ratio={1}>
          <Image
            objectFit="contain"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
          />
        </AspectRatio>
        <Stack direction="row" spacing="5">
          <Stack>
            <Text fontSize="sm">Weight</Text>
            <Text>20</Text>
          </Stack>
          <Stack>
            <Text fontSize="sm">Height</Text>
            <Text>12</Text>
          </Stack>
          <Stack>
            <Text fontSize="sm">Movimientos</Text>
            <Text>109</Text>
          </Stack>
          <Stack>
            <Text fontSize="sm">Tipos</Text>
            <HStack>
              <Badge>Agua</Badge>
              <Badge>Agua</Badge>
            </HStack>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing="5" p="5" bg="gray.100" borderRadius="xl">
        <Stack>
          <Text fontSize="xs">hp</Text>
          <Progress bg="gray.300" borderRadius="full" value={80} />
        </Stack>
        <Stack>
          <Text fontSize="xs">attack</Text>
          <Progress bg="gray.300" borderRadius="full" value={65} />
        </Stack>
      </Stack>
    </Stack>
  );

}