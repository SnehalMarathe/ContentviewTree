import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
@Input('edit') toggle: boolean = false;
 getHeight(row: any, index: number): number {
  return row.someHeight;
}
  columns = [];
  rows = [
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'},
        { group: 'DefaultGroup', restriction: 'No Restrictions', rule: 'Forever', ruleexpires: 'None', updated: {date:'09/13/2016', time:'8:54:05 AM'}, updatedby: 'Alexandra Brennan'}
  ];
  
  constructor() {    
     
  }


}