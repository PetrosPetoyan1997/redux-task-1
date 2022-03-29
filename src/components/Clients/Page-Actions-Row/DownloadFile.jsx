import React from "react";
import {useState} from "react";

import "./DownloadFile.scss";
import Link from "../../Common/Link";

const DownloadFile = ()=>{
    const [linksList] = useState([
        {linkName: 'Import', linkUrl: '/', withIcon: true},
        {linkName: 'Export', linkUrl: '/', withIcon: true},
    ])
    return (
        <div className="download-file">
            {
                linksList.map((link)=>(
                    <Link
                        {...link}
                        importIconName={link.withIcon ? 'down-arrow': null}
                        iconPosition={'left'}
                        iconName={link.linkName === 'Import' ? 'import-icon' : 'export-icon'}
                        /*onClickHandler={/!*func*!/}*/
                        key={link.linkName}
                    />
                ))
            }
        </div>
    );
}

export default DownloadFile;
