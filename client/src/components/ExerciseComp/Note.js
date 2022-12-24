import React, { useState } from "react";
import { Box, Flex, Text, Textarea } from "@chakra-ui/react";
import { BsFillPencilFill } from "react-icons/bs";

function Note({ edit, setEdit }) {
  const [note, setNote] = useState("");
  return (
    <Box p="1.5rem 0" borderBottom="1px solid lightgrey">
      <Flex justifyContent="space-between" m="0.5rem 0" padding="0 1rem">
        <Box
          fontSize="18px"
          fontWeight="bold"
          textTransform="capitalize"
          color="#00548F"
        >
          Today's Exercise Notes
        </Box>
        <Flex
          color="blue"
          gap="1rem"
          textDecoration="underline"
          onClick={() => {
            setEdit(!edit);
          }}
        >
          {!edit ? "Edit" : "Save"} note <BsFillPencilFill />
        </Flex>
      </Flex>
      <Box>
        {edit ? (
          <Textarea
            placeholder="Here is a sample placeholder"
            h="100px"
            onChange={(e) => setNote(e.target.value)}
          />
        ) : (
          <Flex
            border="1px solid black"
            background="#f6f6f6"
            borderRadius="0.5rem"
            padding="1rem"
            h="100px"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontWeight="extrabold">"</Text>
            <Text fontWeight="semibold">{note ? note : "add Todays Note"}</Text>
            <Text fontWeight="extrabold">"</Text>
          </Flex>
        )}
      </Box>
    </Box>
  );
}

export default Note;
