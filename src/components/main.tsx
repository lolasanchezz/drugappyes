import { Grommet, Header, Text, Main } from 'grommet';
import {useState} from 'react'
import SearchPage from './SearchPage'
import DataView from './DataView'

const Whole: React.FC = () => {
const [nav, setnav] = useState('Search')
const [drug, setDrug] = useState('')

return (

<Grommet>
{((nav == "Search")? <SearchPage setDrug = {setDrug} setnav = {setnav}></SearchPage> : <DataView></DataView>)}
</Grommet>

)
}

export default Whole;