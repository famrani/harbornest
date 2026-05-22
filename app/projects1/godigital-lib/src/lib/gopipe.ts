import {
  Component, OnInit, Pipe, PipeTransform
} from '@angular/core';
import { filter } from 'rxjs/operators';
import {
  HttpClient,
} from '@angular/common/http';
import { UtilsService, dayInMilliseconds } from './utils.service';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'filterGenericN',
  pure: false
})

export class FilterGenericN implements PipeTransform {
  transform(objects: any[], filterField, filterValue, fake?, negativeValue?): any[] {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if (negativeValue) {
        if (negativeValue !== '-1') {
          temp = objects.filter(i => {
            if (i != null) {
              return String(i[filterField]) === String(filterValue);
            }
            else {
              return false;
            }
          });
        }
        else {
          temp = objects.filter(i => {
            if (i != null) {
              return String(i[filterField]) !== String(filterValue);
            }
            else {
              return false;
            }
          });
        }
      }
      else {
        temp = objects.filter(i => String(i[filterField]) === String(filterValue));
      }
      return temp;
    } else {
      return [];
    }
  }
}

@Pipe({
  name: 'countGenericN',
  pure: false
})

export class CountGenericN implements PipeTransform {
  transform(objects: any[], filterField, filterValue, fake?, negativeValue?): number {
    let temp: any[] = [];
    if (objects) {
      if (fake) {
        fake++;
      }
      if (negativeValue) {
        if (negativeValue !== '-1') {
          temp = objects.filter(i => {
            if (i != null) {
              return i[filterField] === filterValue;
            }
            else {
              return false;
            }
          });
        }
        else {
          temp = objects.filter(i => {
            if (i != null) {
              return i[filterField] !== filterValue;
            }
            else {
              return false;
            }
          });
        }
      }
      else {
        temp = objects.filter(i => i[filterField] === filterValue);
      }
      if (!temp) {
        temp = [];
      }
    }
    return temp.length;
  }
}


@Pipe({
  name: 'filterGenericNS',
  pure: false
})

export class FilterGenericNS implements PipeTransform {
  transform(objects: any[], filterField, filterValue, fake?, negativeValue?): any[] {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if (filterValue && (filterValue !== -1)) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField]) {
              return String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
            }
          }
          else {
            return false;
          }
        });
      }
      else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
}

@Pipe({
  name: 'countGenericS',
  pure: false
})

export class CountGenericS implements PipeTransform {
  transform(objects: any[], filterField, filterValue: string, reverse?, fake?,): any[] {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if ((filterValue) && (filterValue.length > 0)) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField] && filterValue) {
              if (reverse) {
                if (!reverse) {
                  return String(i[filterField]).toLowerCase().search(String(filterValue).toLowerCase()) === 0;
                }
                else {
                  return String(i[filterField]).toLowerCase().search(String(filterValue).toLowerCase()) !== 0;
                }
              }
              else {
                return String(i[filterField]).toLowerCase().search(String(filterValue).toLowerCase()) === 0;
              }
            }
          }
          else {
            return false;
          }
        });
      }
      else {
        temp = objects;
      }
      return temp.length;
    } else {
      return [];
    }
  }
}


@Pipe({
  name: 'filterGenericS',
  pure: false
})

export class FilterGenericS implements PipeTransform {
  transform(objects: any[], filterField, filterValue: string, reverse?, fake?,): any[] {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if ((filterValue) && (filterValue.length > 0)) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField] && filterValue) {
              if (reverse) {
                if (!reverse) {
                  return String(i[filterField]).toLowerCase().search(String(filterValue).toLowerCase()) === 0;
                }
                else {
                  return String(i[filterField]).toLowerCase().search(String(filterValue).toLowerCase()) !== 0;
                }
              }
              else {
                return String(i[filterField]).toLowerCase().search(String(filterValue).toLowerCase()) === 0;
              }
            }
          }
          else {
            return false;
          }
        });
      }
      else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
}

@Pipe({
  name: 'countGenericPS',
  pure: false
})

export class CountGenericPS implements PipeTransform {
  transform(objects: any[], filterField, filterValue, reverse?, fake?,): number {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if ((String(filterValue)) && (String(filterValue).length > 0)) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField]) {
              if (reverse) {
                if (!reverse) {
                  return String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
                }
                else {
                  return !String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
                }
              }
              else {
                return String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
              }
            }
          }
          else {
            return false;
          }
        });
      } else {
        temp = objects;
      }
      return temp.length;
    } else {
      return 0;
    }
  }
}


@Pipe({
  name: 'filterGenericPS',
  pure: false
})

export class FilterGenericPS implements PipeTransform {
  transform(objects: any[], filterField, filterValue, reverse?, fake?,): any[] {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if ((String(filterValue)) && (String(filterValue).length > 0)) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField]) {
              if (reverse) {
                if (!reverse) {
                  return String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
                }
                else {
                  return !String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
                }
              }
              else {
                return String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
              }
            }
          }
          else {
            return false;
          }
        });
      } else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
}

@Pipe({
  name: 'filterGenericPSO',
  pure: false
})

export class FilterGenericPSO implements PipeTransform {
  transform(objects: any[], filterField1, filterValue1, filterField2, filterValue2): any[] {
    if (objects) {
      let temp;
      if ((filterValue1) && (filterValue2)) {
        temp = objects.filter(i => {
          if (i) {
            if (i[filterField1] && i[filterField2]) {
              return (String(i[filterField1]).toLowerCase().includes(String(filterValue1).toLowerCase()) ||
                String(i[filterField2]).toLowerCase().includes(String(filterValue2).toLowerCase()));
            }
          }
          else {
            return false;
          }
        });
      }
      else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
}

@Pipe({
  name: 'filterGenericPSA',
  pure: false
})

export class FilterGenericPSA implements PipeTransform {
  transform(objects: any[], filterField1, filterValue1, filterField2, filterValue2): any[] {
    if (objects) {
      let temp;
      if ((filterValue1) && (filterValue2)) {
        temp = objects.filter(i => {
          if (i) {
            if (i[filterField1] && i[filterField2]) {
              return (String(i[filterField1]).toLowerCase().includes(String(filterValue1).toLowerCase()) &&
                String(i[filterField2]).toLowerCase().includes(String(filterValue2).toLowerCase()));
            }
          }
          else {
            return false;
          }
        });
      }
      else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
}

@Pipe({
  name: 'filterGenericIS',
  pure: false
})

export class FilterGenericIS implements PipeTransform {
  transform(objects: any[], filterField, filterValue, fake?,): any[] {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if ((filterValue !== -1) && (filterValue) && (filterValue != null)) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField]) {
              return i[filterField].toLowerCase().includes(String(filterValue).toLowerCase());
            }
          }
          else {
            return false;
          }
        });
      }
      else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
}

@Pipe({
  name: 'filterGenericA',
  pure: false
})

export class FilterGenericA implements PipeTransform {
  transform(objects: any[], filterField, filterValue, fake?,): any[] {
    if (objects) {
      let temp = [] as any[];;
      if (fake) {
        fake++;
      }
      if ((filterValue !== -1) && (filterValue) && (filterValue != null)) {
        if (filterValue.length === 0) {
          temp = objects;
        }
        else {
          if (objects) {
            for (const obj of objects) {
              let found = false;
              for (let i = 0; i < obj[filterField].length && !found; i++) {
                for (let j = 0; j < filterValue.length && !found; j++) {
                  if (obj != null) {
                    if (String(obj[filterField][i]).toLowerCase() === String(filterValue[j]).toLowerCase()) {
                      temp.push(obj);
                      found = true;
                    }
                  }
                }
              }
            }
          }
        }
      }
      else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
}


@Pipe({
  name: 'filterGenericB',
  pure: false
})

export class FilterGenericB implements PipeTransform {
  transform(objects: any[], filterField, filterValue?, fake?,): any[] {
    if (objects) {
      let temp;
      if (fake !== undefined) {
        fake++;
      }
      temp = objects.filter(i => {
        let temp2 = false;
        if (filterValue === undefined) {
          filterValue = true;
        }
        if (i != null) {
          if (i[filterField] !== undefined) {
            temp2 = i[filterField] === filterValue;
          }
          else {
            temp2 = true;
          }
        }
        return temp2;
      });
      return temp;
    } else {
      return [];
    }
  }
}



@Pipe({
  name: 'countGenericB',
  pure: false
})

export class CountGenericB implements PipeTransform {
  transform(objects: any[], filterField, filterValue, fake?,): number {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if (filterValue === undefined) {
        filterValue = true;
      }
      if (filterValue !== undefined) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField]) {
              return i[filterField];
            }
          }
          else {
            return false;
          }
        });
      }
      else {
        temp = objects;
      }
      return temp.length;
    } else {
      return 0;
    }
  }
}


@Pipe({
  name: 'translateAuto'
})

export class TranslateAuto implements PipeTransform {
  constructor(public http: HttpClient, public utilsSvc: UtilsService) {

  }

  transform(text: string, fake, languageo?) {
    let language;
    if (!languageo) {
      language = 'en-' + this.utilsSvc.language;
    }
    else {
      language = languageo + '-' + this.utilsSvc.language;
    }
    return this.utilsSvc.translate(text, language).then(data => {
      return data;
    });
  }
}


@Pipe({
  name: 'addComponent'
})

export class AddComponent implements PipeTransform {
  transform(text: string, componentName: string) {
    return componentName + '.' + text;
  }


}

