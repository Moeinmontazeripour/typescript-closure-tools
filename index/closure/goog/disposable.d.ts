// Generated Wed Apr 30 16:41:37 PDT 2014

/// <reference path="../goog.d.ts" />

declare module 'goog.Disposable' {

    /**
     * @enum {number} Different monitoring modes for Disposable.
     */
    enum MonitoringMode { OFF, PERMANENT, INTERACTIVE } 

    /**
     * @return {!Array.<!goog.Disposable>} All {@code goog.Disposable} objects that
     *     haven't been disposed of.
     */
    function getUndisposedObjects(): goog.Disposable[];

    /**
     * Clears the registry of undisposed objects but doesn't dispose of them.
     */
    function clearUndisposedObjects(): void;

    /**
     * Returns True if we can verify the object is disposed.
     * Calls {@code isDisposed} on the argument if it supports it.  If obj
     * is not an object with an isDisposed() method, return false.
     * @param {*} obj The object to investigate.
     * @return {boolean} True if we can verify the object is disposed.
     */
    function isDisposed(obj: any): boolean;
}

declare module 'goog' {

    /**
     * Calls {@code dispose} on the argument if it supports it. If obj is not an
     *     object with a dispose() method, this is a no-op.
     * @param {*} obj The object to dispose of.
     */
    function dispose(obj: any): void;

    /**
     * Calls {@code dispose} on each member of the list that supports it. (If the
     * member is an ArrayLike, then {@code goog.disposeAll()} will be called
     * recursively on each of its members.) If the member is not an object with a
     * {@code dispose()} method, then it is ignored.
     * @param {...*} var_args The list.
     */
    function disposeAll(...var_args: any[]): void;

    /**
     * Class that provides the basic implementation for disposable objects. If your
     * class holds one or more references to COM objects, DOM nodes, or other
     * disposable objects, it should extend this class or implement the disposable
     * interface (defined in goog.disposable.IDisposable).
     * @constructor
     * @implements {goog.disposable.IDisposable}
     */
    class Disposable implements goog.disposable.IDisposable {
        /**
         * Class that provides the basic implementation for disposable objects. If your
         * class holds one or more references to COM objects, DOM nodes, or other
         * disposable objects, it should extend this class or implement the disposable
         * interface (defined in goog.disposable.IDisposable).
         * @constructor
         * @implements {goog.disposable.IDisposable}
         */
        constructor();
    
        /**
         * If monitoring the goog.Disposable instances is enabled, stores the creation
         * stack trace of the Disposable instance.
         * @type {string}
         */
        creationStack: string;
    
        /**
         * @return {boolean} Whether the object has been disposed of.
         * @override
         */
        isDisposed(): boolean;
    
        /**
         * @return {boolean} Whether the object has been disposed of.
         * @deprecated Use {@link #isDisposed} instead.
         */
        getDisposed: any /*missing*/;
    
        /**
         * Disposes of the object. If the object hasn't already been disposed of, calls
         * {@link #disposeInternal}. Classes that extend {@code goog.Disposable} should
         * override {@link #disposeInternal} in order to delete references to COM
         * objects, DOM nodes, and other disposable objects. Reentrant.
         *
         * @return {void} Nothing.
         * @override
         */
        dispose(): void;
    
        /**
         * Associates a disposable object with this object so that they will be disposed
         * together.
         * @param {goog.disposable.IDisposable} disposable that will be disposed when
         *     this object is disposed.
         */
        registerDisposable(disposable: goog.disposable.IDisposable): void;
    
        /**
         * Invokes a callback function when this object is disposed. Callbacks are
         * invoked in the order in which they were added.
         * @param {function(this:T):?} callback The callback function.
         * @param {T=} opt_scope An optional scope to call the callback in.
         * @template T
         */
        addOnDisposeCallback(callback: () => any, opt_scope?: T): void;
    
        /**
         * Deletes or nulls out any references to COM objects, DOM nodes, or other
         * disposable objects. Classes that extend {@code goog.Disposable} should
         * override this method.
         * Not reentrant. To avoid calling it twice, it must only be called from the
         * subclass' {@code disposeInternal} method. Everywhere else the public
         * {@code dispose} method must be used.
         * For example:
         * <pre>
         *   mypackage.MyClass = function() {
         *     goog.base(this);
         *     // Constructor logic specific to MyClass.
         *     ...
         *   };
         *   goog.inherits(mypackage.MyClass, goog.Disposable);
         *
         *   mypackage.MyClass.prototype.disposeInternal = function() {
         *     // Dispose logic specific to MyClass.
         *     ...
         *     // Call superclass's disposeInternal at the end of the subclass's, like
         *     // in C++, to avoid hard-to-catch issues.
         *     goog.base(this, 'disposeInternal');
         *   };
         * </pre>
         * @protected
         */
        disposeInternal(): void;
    }
}

declare module 'goog.disposable' {

    /**
     * Interface for a disposable object.  If a instance requires cleanup
     * (references COM objects, DOM notes, or other disposable objects), it should
     * implement this interface (it may subclass goog.Disposable).
     * @interface
     */
    interface IDisposable {
        dispose: any /*missing*/;
        isDisposed: any /*missing*/;
    }
}
