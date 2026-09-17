export const DEFAULT_ASSET_TYPE = 'boat';
export const DEFAULT_BOAT_ID = 'alegria';
export const SUPPORTED_ASSET_TYPES = new Set(['boat','place','car','pool']);
export interface AssetRouteContext { assetType:string; assetId:string; pathname:string; }
export function validAssetType(v:unknown): v is string { return typeof v==='string' && SUPPORTED_ASSET_TYPES.has(v.toLowerCase()); }
export function validBoatId(v:unknown): v is string { return typeof v==='string' && /^[a-z0-9][a-z0-9_-]*$/.test(v); }
export function resolveAssetRoute(pathname:string):AssetRouteContext {
 const clean=String(pathname||'/').split('?')[0].split('#')[0], p=clean.split('/').filter(Boolean);
 if(p.length>=2&&validAssetType(p[0])&&validBoatId(p[1])) { const c={assetType:p[0].toLowerCase(),assetId:p[1].toLowerCase(),pathname:clean}; try{sessionStorage.setItem('harbornest.assetType',c.assetType);sessionStorage.setItem('harbornest.assetId',c.assetId);}catch{} return c; }
 let t:any=null,i:any=null; try{t=sessionStorage.getItem('harbornest.assetType');i=sessionStorage.getItem('harbornest.assetId');}catch{}
 return {assetType:validAssetType(t)?t:DEFAULT_ASSET_TYPE,assetId:validBoatId(i)?i:DEFAULT_BOAT_ID,pathname:clean};
}
export function activeAssetContext(){return typeof window==='undefined'?{assetType:DEFAULT_ASSET_TYPE,assetId:DEFAULT_BOAT_ID,pathname:'/'}:resolveAssetRoute(window.location.pathname);}
export function activeBoatId(){return activeAssetContext().assetId;} export function activeAssetType(){return activeAssetContext().assetType;}
export function assetBasePath(t=activeAssetType(),i=activeBoatId()){if(!validAssetType(t)||!validBoatId(i))throw new Error('Invalid resource scope');return `/${t}/${i}`;}
export function boatPath(path='/',id=activeBoatId(),type=activeAssetType()){const clean=`/${String(path||'').replace(/^\/+/, '')}`;return `${assetBasePath(type,id)}${clean==='/'?'':clean}`;}
export function initializeBoatRouting(){if(typeof window!=='undefined')resolveAssetRoute(window.location.pathname);}
