import useTest from './test'
import useLgoin from './login'
import useWorklist from './worklist'

export default function useStore() {
  return {
    test: useTest(),
    login: useLgoin(),
    worklist: useWorklist()
  }
}