import react from 'react'
import {useEffect, useState} from 'react'
import { Grommet, Header, Text, Main, Box, Tag, TextInput, Button} from 'grommet';
import DrugInteractionSearch from './fetch'








interface SearchPageProps {
    setDrug: (drug: string) => void;
    setnav: (nav: string) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({setDrug, setnav}) => {
const [value, setValue] = useState('')
return (
    <Grommet>
        <Box height = "100vh" alignContent={"center"}>
    <Box height="60%">
    <Tag value = {"check your drug interactions:"} alignSelf = {"center"} margin = {"small"}></Tag>
    <TextInput
    placeholder="search..."
    value = {value}
    onChange={(e) => setValue(e.target.value)}
    
></TextInput>
</Box>

<Button primary label = {"search!"} alignSelf={"center"} onClick={() => {
    setDrug(value)
    setnav("Data")
}
}></Button>
<Box height = "30%"> 
</Box>
</Box>
</Grommet>

)


}

export default SearchPage;
