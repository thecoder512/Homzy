type liName = {
    name: string
    index: number
    mobile: boolean
    active?: boolean
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export const Li = ({ name, index, mobile, active, onClick }: liName) => {
    return (
        <>
            <li className={`mobile__menu-list`}>
                <a
                    href={`#${name}`}
                    onClick={onClick}
                    className={`mobile__menu-link ${active && 'active'}`}
                >
                    {/* if the menu is mobile one show svg instead of name */}
                    {mobile ? (
                        index === 0 ? (
                            <svg
                                width='17'
                                height='17'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d='M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z'
                                    fill='#6c7493'
                                />
                            </svg>
                        ) : index === 1 ? (
                            <svg
                                width='17'
                                height='17'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d='M19 2H9c-1.103 0-2 .897-2 2v5.586l-4.707 4.707A1 1 0 0 0 3 16v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm-8 18H5v-5.586l3-3 3 3V20zm8 0h-6v-4a.999.999 0 0 0 .707-1.707L9 9.586V4h10v16z'
                                    fill='#6c7493'
                                />
                                <path
                                    d='M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 1h2v2H7z'
                                    fill='#6c7493'
                                />
                            </svg>
                        ) : index === 2 ? (
                            <svg
                                width='17'
                                height='17'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d='M5,8.999c0,1.902,0.765,3.627,2,4.89V21c0,0.347,0.18,0.668,0.474,0.851c0.295,0.184,0.664,0.198,0.973,0.044L12,20.118 l3.553,1.776C15.694,21.965,15.847,22,16,22c0.183,0,0.365-0.05,0.525-0.149C16.82,21.668,17,21.347,17,21v-7.11 c1.235-1.263,2-2.988,2-4.891C19,5.14,15.86,2,12,2S5,5.14,5,8.999z M12.447,18.105c-0.281-0.141-0.613-0.141-0.895,0L9,19.382 v-4.067C9.911,15.749,10.926,16,12,16s2.089-0.25,3-0.685v4.066L12.447,18.105z M12,4c2.756,0,5,2.242,5,4.999 C17,11.757,14.757,14,12,14c-2.757,0-5-2.243-5-5.001C7,6.242,9.243,4,12,4z'
                                    fill='#6c7493'
                                />
                            </svg>
                        ) : index === 3 ? (
                            <svg
                                width='17'
                                height='17'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d='M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z'
                                    fill='#6c7493'
                                />
                            </svg>
                        ) : (
                            ''
                        )
                    ) : (
                        <span>{name}</span>
                    )}
                </a>
            </li>
        </>
    )
}
