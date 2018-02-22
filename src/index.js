import { h, app } from 'hyperapp'
// @jsx h 

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const view = (state, actions) => (
  <main>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)} disabled={state.count <= 0}>ー</button>
    <button onclick={() => actions.up(1)}>＋</button>
  </main>
)

app(state, actions, view, document.body)
