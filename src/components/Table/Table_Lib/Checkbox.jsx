import React, { useEffect, useRef, forwardRef } from 'react';
export const Checkbox = forwardRef(({ indeterminate = false, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
        if (resolvedRef.current) {
            resolvedRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    return (
        <input
            type="checkbox"
            ref={resolvedRef}
            {...rest}
            className="
                h-4 
                w-4 
                accent-deep-blue  /* Thay đổi màu sắc của checkbox */
                border-2 
                border-deep-blue /* Màu viền của checkbox */
                rounded-md /* Thay đổi hình dạng nếu cần */
            "
        />
    );
});
