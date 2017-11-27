import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { ITreeOptions, IActionMapping } from 'angular-tree-component';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./tree.component.css'],

})

export class TreeComponent implements OnInit {
    
    toggle: boolean;

    data: any[] = [];
   
    @Output() hide: EventEmitter<boolean> = new EventEmitter(false);
   
    constructor() { }

    toggleHide(e) {
        this.hide.emit(this.toggle = !this.toggle);
    }    

    nodes = [
        {
            "name": "SUBMISSION MASTER",
            "name2": "PTS_LF_HDXSP195A_ALL_3387_20160701055041PRD_KO1VCN4N.mov",
            "children": [{
                "name": "ARCHIVE MASTER",
                "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_XDCAM_NTSC_1080_16x9_INTL.mp4",
                "children": [{
                    "name": "ARCHIVE MASTER",
                    "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_XDCAM_PAL_4PCT_AudioRemap_5.mp4",
                    "children": []
                },
                {
                    "name": "ARCHIVE MASTER",
                    "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_SD_PAL_16X9_anamorphic_INTL.mp4",
                    "children": [{
                        "name": "ARCHIVE MASTER",
                        "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_XDCAM_NTSC_1080_16x9_INTL.mp4",
                        "children": [{
                            "name": "ARCHIVE MASTER",
                            "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_XDCAM_PAL_4PCT_AudioRemap_5.mp4",
                            "children": [{
                                "name": "ARCHIVE MASTER",
                                "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_XDCAM_NTSC_1080_16x9_INTL.mp4",
                                "children": [{
                                    "name": "ARCHIVE MASTER",
                                    "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_XDCAM_PAL_4PCT_AudioRemap_5.mp4",
                                    "children": []
                                }]
                            }]
                        }]
                    }]
                }]
            },
            {
                "selected": false,
                "name": "ARCHIVE MASTER",
                "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_SD_PAL_16X9_anamorphic_INTL.mp4",
                "children": [{
                    "name": "ARCHIVE MASTER",
                    "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_SD_PAL_16X9_anamorphic_INTL.mp4",
                    "children": []
                }]
            }]
        },
        {
            "name": "Caption File",
            "name2": "PTS_LF_HDXSP195A_ALL_3544_20160708012030PRD_W6L8XEVK.scc",
            "children": [{
                "name": "ARCHIVE MASTER",
                "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_XDCAM_NTSC_1080_16x9_INTL.mp4",
                "children": [{
                    "name": "ARCHIVE MASTER",
                    "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_XDCAM_PAL_4PCT_AudioRemap_5.mp4",
                    "children": []
                },
                {
                    "name": "ARCHIVE MASTER",
                    "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_SD_PAL_16X9_anamorphic_INTL.mp4",
                    "children": []
                }]
            },
            {
                "selected": false,
                "name": "ARCHIVE MASTER",
                "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_SD_PAL_16X9_anamorphic_INTL.mp4",
                "children": [{
                    "name": "ARCHIVE MASTER",
                    "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_SD_PAL_16X9_anamorphic_INTL.mp4",
                    "children": []
                }]
            }]
        },
        {
            "name": "Caption File",
            "name2": "PTS_LF_HDXSP195A_ALL_3544_20160708012030PRD_W6L8XEVK.scc",
            "children": [{
                "name": "ARCHIVE MASTER",
                "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_XDCAM_NTSC_1080_16x9_INTL.mp4",
                "children": [{
                    "name": "ARCHIVE MASTER",
                    "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_XDCAM_PAL_4PCT_AudioRemap_5.mp4",
                    "children": []
                },
                {
                    "name": "ARCHIVE MASTER",
                    "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_SD_PAL_16X9_anamorphic_INTL.mp4",
                    "children": []
                }]
            },
            {
                "selected": false,
                "name": "ARCHIVE MASTER",
                "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_SD_PAL_16X9_anamorphic_INTL.mp4",
                "children": [{
                    "name": "ARCHIVE MASTER",
                    "name2": "SpongeBob_SquarePants_195A_SpongeBob_LongPants_HD_OPEN_SD_PAL_16X9_anamorphic_INTL.mp4",
                    "children": []
                }]
            }]
        }
    ]
    actionMapping: IActionMapping = {
        mouse: {
            click: (tree, node) => this.check(node, !node.data.checked)
        }
    };

    options: ITreeOptions = {
        actionMapping: this.actionMapping
    };

    public check(node, checked) {
        this.updateChildNodeCheckbox(node, checked);
        //this.updateParentNodeCheckbox(node.realParent);
    }
    public updateChildNodeCheckbox(node, checked) {
        node.data.checked = checked;
        if (node.children) {
            node.children.forEach((child) => this.updateChildNodeCheckbox(child, checked));
        }
    }
    public updateParentNodeCheckbox(node) {
        if (!node) {
            return;
        }
        let allChildrenChecked = true;
        let noChildChecked = true;

        for (const child of node.children) {
            if (!child.data.checked || child.data.indeterminate) {
                allChildrenChecked = false;
            }
            if (child.data.checked) {
                noChildChecked = false;
            }
        }
        if (allChildrenChecked) {
            node.data.checked = true;
            node.data.indeterminate = false;
        } else if (noChildChecked) {
            node.data.checked = false;
            node.data.indeterminate = false;
        } else {
            node.data.checked = true;
            node.data.indeterminate = true;
        }
        this.updateParentNodeCheckbox(node.parent);
    }
    ngOnInit() {
    }

}
