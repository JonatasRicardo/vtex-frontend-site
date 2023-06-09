import type { ReactNode } from 'react';

interface ModalProps {
    title?: string | ReactNode,
    open: boolean,
    children: ReactNode,
    footer?: ReactNode,
    onClose: () => void
}

export default function Modal(props: ModalProps) {

    const visibilityClass = props.open ? '' : 'hidden';

    return (
        <div tabIndex={-1} aria-hidden="true" className={`bg-navy/70 backdrop-blur-md fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full ${visibilityClass}`}>
            <div className="relative w-full max-w-full  max-h-full">

                <div className="relative bg-white rounded-lg shadow">

                    <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-navy">
                            {props.title}
                        </h3>
                        <button onClick={props.onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">fechar janela</span>
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                       {props.children}
                    </div>

                    {!!props.footer && <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        {props.footer}
                    </div>}
                </div>
            </div>
        </div>

    )
}