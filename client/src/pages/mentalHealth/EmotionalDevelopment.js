import React { useState } from 'react';
import styled from 'styled-components';
 
const PageContainer = styled.div`
    margin: 20px auto;
    font-family: courier, sans-serif;
    width: 80%;
    text-align: center;
`;

const SectionTitle = styled.h2`
    font-size: 3.5em;
    margin-top: 20px;
    text-align: center;
`;
const SubTitle = styled.h3`
    font-size: 2em;
    margin-top: 10px;
    text-align: center;
`;

const Paragraph = styled.p`
    font-size: 1.5em;
    margin-bottom: 20px;
    text-align: left;
`;
const List = styled.ul`
    list-style-type: none;
    margin-left: 40px;
`;

const ListItem = styled.li`
    margin: 5px 0;
    font-size: 1.5em;
`;

const SearchBarContainer = styled.div`
    margin-bottom: 20px;
`;

const SearchInput = styled.input`
    font-size: 1em;
    padding: 10px;
    margin-top: 10px;
    width: 50%;
    border: 1px solid #ccc;
    border-radius: 5px;
`;
 
const StretchContainer = styled.div`
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px 0;
    border-radius: 8px;
    background-color: #f9f9f9;
`;


