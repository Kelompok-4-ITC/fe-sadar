import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button type="button" className="w-full py-3 px-4  gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#8DD3BB] text-[#112211] hover:bg-[#5AFDC5]text-center">
        Button
      </button>
    )
  }
}
