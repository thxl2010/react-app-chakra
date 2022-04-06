import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Home from '../views/home';
import Login from '../views/login';
// import Card from "./Card";

export default function Main() {
  return (
    <Box w="98%" mx="auto" mt="100px" d="flex" justifyContent="center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/card" element={<Card />} /> */}
      </Routes>
    </Box>
  );
}
