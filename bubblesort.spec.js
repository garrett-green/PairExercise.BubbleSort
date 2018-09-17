describe("Bubble Sort", function() {
    describe("bubbleSort function", function() {
        it("handles an empty array", function() {
            expect(Sorting.bubbleSort([])).toEqual([]);
        });

        it("handles single item array", function() {
            expect([42].length).toEqual(1);
            expect(Sorting.bubbleSort([42])).toEqual([42]);
        });

        it("handles multiple items in an array", function() {
            expect([42, 50].length).toEqual(2);
            expect(Sorting.bubbleSort([42, 50])).toEqual([42, 50]);
        });

        it("rejects non-array data type", function() {
            expect(Sorting.bubbleSort("str")).toEqual(undefined);
            expect(Sorting.bubbleSort(() => "foo")).toEqual(undefined);
        });

        it("doesnt use built-in sort method", function() {
            let arr = [1, 3, 2];
            // debugger;
            spyOn(arr, "sort").and.callThrough();
            Sorting.bubbleSort(arr);
            expect(arr.sort.calls.count()).toEqual(0);
        });

        it("returns sorted array correctly; 2 items", function() {
            let arr = [100, 5];
            // spyOn(arr, 'sort').and.callThrough();
            Sorting.bubbleSort(arr);
            expect(arr).toEqual([5, 100]);
        });

        it("returns sorted array correctly; 3 items", function() {
            let arr = [3, 2, 1];
            // spyOn(arr, 'sort').and.callThrough();
            Sorting.bubbleSort(arr);
            expect(arr).toEqual([1, 2, 3]);
        });
    });

    describe("swap function", function() {
        it("swap function correctly changes number positions", function() {
            let arr = [1, 3];
            Sorting.swap(0, 1, arr);
            expect(arr).toEqual([3, 1]);
        });

        it("uses swap function", function() {
            let arr = [55, 50];
            spyOn(Sorting, "swap").and.callThrough();
            Sorting.bubbleSort(arr);
            expect(Sorting.swap.calls.count()).toEqual(arr.length - 1);
        });
    });
});
