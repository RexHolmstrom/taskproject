import React from "react";
import ReactNextPaging from "react-next-paging";

const PaginacionTabla = {
    border: "1px solid #ccc",
    background: "#fff",
    fontSize: "1em",
    padding: 10,
    margin: 5,
    width: 70
};

const Pagination = ({ itemsperpage, nocolumns, items, pagesspan }) => {
    return (
        <ReactNextPaging
            itemsperpage={itemsperpage}
            nocolumns={nocolumns}
            items={items}
            pagesspan={pagesspan}
        >
            {({
                getBackButtonProps,
                getFastBackButtonProps,
                getFwdButtonProps,
                getFastFwdButtonProps,
                getSelPageButtonProps,
                nopages,
                inipagearray,
                pagesforarray,
                currentpage,
                noitems,
                initialitem,
                lastitem,
                goBackBdisabled,
                goFastBackBdisabled,
                goFwdBdisabled,
                goFastFwdBdisabled
            }) => (
                    <tbody>
                        {items.slice(initialitem, lastitem).map((item, index) => {
                            return item;
                        })}
                        {noitems > 0
                            ? [
                                <tr key={"pagingrow" + 100}>
                                    <td colSpan={nocolumns} style={{ textAlign: "center" }}>
                                        <button

                                            {...getFastBackButtonProps()}
                                            disabled={goFastBackBdisabled}
                                        >
                                            {"<<"}
                                        </button>
                                        <button

                                            {...getBackButtonProps()}
                                            disabled={goBackBdisabled}
                                        >
                                            {"<"}
                                        </button>
                                        {Array.from(
                                            { length: pagesforarray },
                                            (v, i) => i + inipagearray
                                        ).map(page => {
                                            return (
                                                <button
                                                    key={page}
                                                    {...getSelPageButtonProps({ page: page })}
                                                    disabled={currentpage == page}
                                                >
                                                    {page}
                                                </button>
                                            );
                                        })}
                                        <button

                                            {...getFwdButtonProps()}
                                            disabled={goFwdBdisabled}
                                        >
                                            {">"}
                                        </button>
                                        <button

                                            {...getFastFwdButtonProps()}
                                            disabled={goFastFwdBdisabled}
                                        >
                                            {">>"}
                                        </button>
                                    </td>
                                </tr>
                            ]
                            : null}
                    </tbody>
                )}
        </ReactNextPaging>
    );
};

export default Pagination;