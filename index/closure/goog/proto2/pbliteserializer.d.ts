// Generated Thu May  1 12:33:47 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/proto2/fielddescriptor.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/proto2/descriptor.d.ts" />
/// <reference path="../../goog/proto2/message.d.ts" />
/// <reference path="../../goog/proto2/serializer.d.ts" />
/// <reference path="../../goog/proto2/lazydeserializer.d.ts" />

declare module goog.proto2 {

    /**
     * PB-Lite serializer.
     *
     * @constructor
     * @extends {goog.proto2.LazyDeserializer}
     */
    class PbLiteSerializer extends goog.proto2.LazyDeserializer {
        /**
         * PB-Lite serializer.
         *
         * @constructor
         * @extends {goog.proto2.LazyDeserializer}
         */
        constructor();
    
        /**
         * By default, the proto tag with id 1 will have index 1 in the serialized
         * array.
         *
         * If the serializer is set to use zero-indexing, the tag with id 1 will have
         * index 0.
         *
         * @param {boolean} zeroIndexing Whether this serializer should deal with
         *     0-indexed protos.
         */
        setZeroIndexed(zeroIndexing: boolean): void;
    }
}
