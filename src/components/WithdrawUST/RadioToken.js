function RadioToken(props) {
    return(
        <div>
                                        <div className="overflow-hidden relative">
                                            <div className="pb-8 flex justify-center items-center">
                                                <div>
                                                    <div onClick={props.handleClick} className={`rounded-full dark:bg-dark-500 radio-padding-outline radio-outline cursor-pointer ${props.isSelected?'active':''}`}>
                                                        <div className="rounded-full bg-white radio-padding" />
                                                    </div>
                                                </div>
                                                <div className="ml-4 w-full">
                                                    <input onChange={props.onType} type="number" className="dark:bg-dark-600 dark:border-0 border rounded-md focus:outline-none bg-steel-100 p-2 pl-32 h-12 w-full dark:text-white" placeholder={0.0} defaultValue={0} />
                                                    <div className="flex justify-between ">
                                                        <div onClick={props.handleClick} className="dark:bg-dark-500 dark:border-0 border rounded-md bg-white w-28 flex items-center p-2 -mt-12 z-10 relative cursor-pointer">
                                                            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                                                                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                                                                    <img alt aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: '100%', display: 'block', margin: 0, border: 'none', padding: 0 }} />
                                                                </div>
                                                                <img src= {props.logo} decoding="async" style={{ visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet={props.logo}/>
                                                            </div>
                                                            <span className="font-bold ml-2">{props.name}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    )
}

export default RadioToken;