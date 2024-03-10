import React, { Component } from 'react'

export class Input extends Component {
  render() {
    return (
      <div class="relative">
        <input type={this.props.type} id="hs-floating-gray-input-email" className="peer p-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600
  focus:pt-6  focus:pb-2  [&:not(:placeholder-shown)]:pt-6  [&:not(:placeholder-shown)]:pb-2
  autofill:pt-6  autofill:pb-2"
          placeholder="you@email.com" />
        <label for="hs-floating-gray-input-email" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
    peer-focus:text-xs
    peer-focus:-translate-y-1.5
    peer-focus:text-gray-500
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:-translate-y-1.5
    peer-[:not(:placeholder-shown)]:text-gray-500">{this.props.name}
        </label>
      </div>
    )
  }
}

export default Input