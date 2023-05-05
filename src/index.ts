// Generate main entry point
import { executeTask } from '@dcl/sdk/ecs'
import { main } from './main'
executeTask(async () => { main() })
 