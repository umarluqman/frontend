function DropdownRHS(props) {
    return (
<div onClick={props.onClick}>
                                                                                <button className="swap-dropdown-item dark:bg-dark-500 dark:text-white hover:bg-gray-100 text-sm py-2 px-4 font-normal text-steel-400 block w-full whitespace-no-wrap bg-transparent text-white"><div className="flex items-center">
                                                                                    <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                                                                        <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                                                            <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                                                                        </div>
                                                                                        <img src={props.logo} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={props.logo} />                                                                                    </div>
                                                                                    <div className="font-bold ml-2 text-sm ">{props.name}</div>
                                                                                </div></button>
                                                                            </div>
    )
}

export default DropdownRHS;