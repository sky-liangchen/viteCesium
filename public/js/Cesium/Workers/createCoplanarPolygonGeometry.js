define(["./arrayRemoveDuplicates-d2f048c5","./BoundingRectangle-c09cdb4c","./buildModuleUrl-57a32107","./Cartesian2-47311507","./Cartographic-3309dd0d","./Check-7b2a090c","./ComponentDatatype-c140a87d","./CoplanarPolygonGeometryLibrary-a90e3534","./when-b60132fc","./GeometryAttribute-c42d25b7","./GeometryAttributes-252e9929","./GeometryInstance-dbc9f4c4","./GeometryPipeline-6d9322f0","./IndexDatatype-8a5eead4","./Math-119be1a3","./Matrix4-cde86d0e","./PolygonGeometryLibrary-20c09e27","./PolygonPipeline-805ba13c","./VertexFormat-6446fca0","./WebGLConstants-4ae0db90","./RuntimeError-4a5c8994","./OrientedBoundingBox-fcba62fd","./Cartesian4-3ca25aab","./EllipsoidTangentPlane-ceab6aaa","./IntersectionTests-5e35c2ab","./Plane-ca0357f4","./FeatureDetection-c3b71206","./AttributeCompression-90851096","./EncodedCartesian3-f1396b05","./ArcType-29cf2197","./EllipsoidRhumbLine-ed1a6bf4","./earcut-2.2.1-20c8012f"],(function(e,t,a,n,r,o,i,l,s,c,p,y,u,m,d,g,b,v,h,f,C,x,P,w,A,F,G,L,E,T,D,_){"use strict";var k=new r.Cartesian3,V=new t.BoundingRectangle,R=new n.Cartesian2,M=new n.Cartesian2,I=new r.Cartesian3,H=new r.Cartesian3,B=new r.Cartesian3,O=new r.Cartesian3,z=new r.Cartesian3,S=new r.Cartesian3,N=new c.Quaternion,Q=new g.Matrix3,U=new g.Matrix3,j=new r.Cartesian3;function Y(e,t,o,l,s,y,u,b){var h=e.positions,f=v.PolygonPipeline.triangulate(e.positions2D,e.holes);f.length<3&&(f=[0,1,2]);var C=m.IndexDatatype.createTypedArray(h.length,f.length);C.set(f);var x=Q;if(0!==l){var P=c.Quaternion.fromAxisAngle(y,l,N);if(x=g.Matrix3.fromQuaternion(P,x),t.tangent||t.bitangent){P=c.Quaternion.fromAxisAngle(y,-l,N);var w=g.Matrix3.fromQuaternion(P,U);u=r.Cartesian3.normalize(g.Matrix3.multiplyByVector(w,u,u),u),t.bitangent&&(b=r.Cartesian3.normalize(r.Cartesian3.cross(y,u,b),b))}}else x=g.Matrix3.clone(g.Matrix3.IDENTITY,x);var A=M;t.st&&(A.x=o.x,A.y=o.y);for(var F=h.length,G=3*F,L=new Float64Array(G),E=t.normal?new Float32Array(G):void 0,T=t.tangent?new Float32Array(G):void 0,D=t.bitangent?new Float32Array(G):void 0,_=t.st?new Float32Array(2*F):void 0,V=0,I=0,H=0,B=0,O=0,z=0;z<F;z++){var S=h[z];if(L[V++]=S.x,L[V++]=S.y,L[V++]=S.z,t.st){var j=s(g.Matrix3.multiplyByVector(x,S,k),R);n.Cartesian2.subtract(j,A,j);var Y=d.CesiumMath.clamp(j.x/o.width,0,1),q=d.CesiumMath.clamp(j.y/o.height,0,1);_[O++]=Y,_[O++]=q}t.normal&&(E[I++]=y.x,E[I++]=y.y,E[I++]=y.z),t.tangent&&(T[B++]=u.x,T[B++]=u.y,T[B++]=u.z),t.bitangent&&(D[H++]=b.x,D[H++]=b.y,D[H++]=b.z)}var J=new p.GeometryAttributes;return t.position&&(J.position=new c.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:L})),t.normal&&(J.normal=new c.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:E})),t.tangent&&(J.tangent=new c.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T})),t.bitangent&&(J.bitangent=new c.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:D})),t.st&&(J.st=new c.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:_})),new c.Geometry({attributes:J,indices:C,primitiveType:a.PrimitiveType.TRIANGLES})}function q(e){var t=(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).polygonHierarchy,a=s.defaultValue(e.vertexFormat,h.VertexFormat.DEFAULT);this._vertexFormat=h.VertexFormat.clone(a),this._polygonHierarchy=t,this._stRotation=s.defaultValue(e.stRotation,0),this._ellipsoid=n.Ellipsoid.clone(s.defaultValue(e.ellipsoid,n.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this.packedLength=b.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+h.VertexFormat.packedLength+n.Ellipsoid.packedLength+2}q.fromPositions=function(e){return new q({polygonHierarchy:{positions:(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid})},q.pack=function(e,t,a){return a=s.defaultValue(a,0),a=b.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,a),n.Ellipsoid.pack(e._ellipsoid,t,a),a+=n.Ellipsoid.packedLength,h.VertexFormat.pack(e._vertexFormat,t,a),a+=h.VertexFormat.packedLength,t[a++]=e._stRotation,t[a]=e.packedLength,t};var J=n.Ellipsoid.clone(n.Ellipsoid.UNIT_SPHERE),W=new h.VertexFormat,Z={polygonHierarchy:{}};return q.unpack=function(e,t,a){t=s.defaultValue(t,0);var r=b.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=r.startingIndex,delete r.startingIndex;var o=n.Ellipsoid.unpack(e,t,J);t+=n.Ellipsoid.packedLength;var i=h.VertexFormat.unpack(e,t,W);t+=h.VertexFormat.packedLength;var l=e[t++],c=e[t];return s.defined(a)||(a=new q(Z)),a._polygonHierarchy=r,a._ellipsoid=n.Ellipsoid.clone(o,a._ellipsoid),a._vertexFormat=h.VertexFormat.clone(i,a._vertexFormat),a._stRotation=l,a.packedLength=c,a},q.createGeometry=function(t){var n=t._vertexFormat,o=t._polygonHierarchy,i=t._stRotation,s=o.positions;if(!((s=e.arrayRemoveDuplicates(s,r.Cartesian3.equalsEpsilon,!0)).length<3)){var p=I,g=H,v=B,h=z,f=S;if(l.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(s,O,h,f)){if(p=r.Cartesian3.cross(h,f,p),p=r.Cartesian3.normalize(p,p),!r.Cartesian3.equalsEpsilon(O,r.Cartesian3.ZERO,d.CesiumMath.EPSILON6)){var C=t._ellipsoid.geodeticSurfaceNormal(O,j);r.Cartesian3.dot(p,C)<0&&(p=r.Cartesian3.negate(p,p),h=r.Cartesian3.negate(h,h))}var x=l.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(O,h,f),P=l.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(O,h,f);n.tangent&&(g=r.Cartesian3.clone(h,g)),n.bitangent&&(v=r.Cartesian3.clone(f,v));var w=b.PolygonGeometryLibrary.polygonsFromHierarchy(o,x,!1),A=w.hierarchy,F=w.polygons;if(0!==A.length){s=A[0].outerRing;for(var G=a.BoundingSphere.fromPoints(s),L=b.PolygonGeometryLibrary.computeBoundingRectangle(p,P,s,i,V),E=[],T=0;T<F.length;T++){var D=new y.GeometryInstance({geometry:Y(F[T],n,L,i,P,p,g,v)});E.push(D)}var _=u.GeometryPipeline.combineInstances(E)[0];_.attributes.position.values=new Float64Array(_.attributes.position.values),_.indices=m.IndexDatatype.createTypedArray(_.attributes.position.values.length/3,_.indices);var k=_.attributes;return n.position||delete k.position,new c.Geometry({attributes:k,indices:_.indices,primitiveType:_.primitiveType,boundingSphere:G})}}}},function(e,t){return s.defined(t)&&(e=q.unpack(e,t)),q.createGeometry(e)}}));
