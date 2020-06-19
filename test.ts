import { run } from "./index"
import assert from 'assert'


assert(run("roller_coaster.hard") == 8974489271113753, "test: hard")
assert(run("roller_coaster.harder") == 89744892714152289, "test: harder")
