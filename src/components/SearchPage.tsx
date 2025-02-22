import react from 'react'
import { Grommet, Header, Text, Main, Box, Tag} from 'grommet';
import DrugInteractionSearch from './fetch'


const SearchPage: React.FC = () => {

return (
    <Grommet>
<Box>
<Tag value = {"drug interaction checker!"} alignSelf = {"center"}></Tag>
</Box>
</Grommet>

)


}

export default SearchPage;
