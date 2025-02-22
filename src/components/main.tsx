import { Grommet, Header, Text, Main } from 'grommet';
import SearchPage from './SearchPage'
import DataView from './DataView'

const Whole: React.FC = () => {
let firstTime = true

return (

<Grommet>
{(firstTime? <SearchPage></SearchPage> : <></>)}
</Grommet>

)
}

export default Whole;