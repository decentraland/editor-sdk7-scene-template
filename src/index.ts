
// TEMPORARY UNTIL @dcl/explorer is up-to-date 
import engineApi from '~system/EngineApi'
const originalCrdtGetState = engineApi.crdtGetState
engineApi.crdtGetState = async (body: any): Promise<any> => ({...originalCrdtGetState(body), hasEntities: false})

// Generate main entry point
import { executeTask } from '@dcl/sdk/ecs'
import { main } from './main'
executeTask(async () => { main() })
 