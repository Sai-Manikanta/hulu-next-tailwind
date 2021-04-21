function HeaderItem({ text, Icon }) {
    return (
        <div className="group text-gray-300 hover:text-white mr-2 flex flex-col justify-center cursor-pointer">
          <Icon className="text-white group-hover:animate-bounce h-6 group-hover:text-white transition-all duration-500 ease-in-out" />
          <p className="group-hover:opacity-100 opacity-0 text-xs transition-all duration-500 ease-in-out mt-2">{ text }</p>
        </div>
    )
}

export default HeaderItem
